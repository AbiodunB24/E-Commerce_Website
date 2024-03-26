import React, { useEffect, useState } from 'react'
import "./Payment.css"
import { useStateValue } from '../StateProvider';
import CheckoutProduct from '../checkout/CheckoutProduct';
import { Link, Navigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { getBasketTotal } from '../reducer';
import { NumberFormatBase, NumericFormat } from 'react-number-format';
import axios from '../axios';

const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue();


    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing]= useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer

        const getClientSecret = async () => {
       const response = await axios({
        method: 'post',
        // stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100 }`
       });
       setClientSecret(response.dsta.clientSecret)

        }

        getClientSecret();
    }, [basket])

    console.log("THE SECRET IS >>>", clientSecret)

    const handleSubmit = async (event) => {
        // do all the fancy stripes stuff ...
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent = payment confirmation

            setSucceeded(true);
            setError(null);
            setProcessing(false)

            Navigate('/orders')
        })
    }

    const handleChange = event => {
        // listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "")
    }


  return (
    <div className='payment'>
        <div className="payment__container">
            <h1>
            Checkout {<Link to={"/checkout"}>({basket?.length} items)</Link>}
            </h1>
            {/* Payment section - delivery address */}
        <div className="payment__section">
            <div className="payment__title">
                <h3>Delivery Address</h3>
            </div>
            <div className='payment__address'>
                <p> {user?.email} </p>
                <p> 123 Ikeja</p>
                <p>Lagos, Nigeria</p>
            </div>
             </div>

            {/* Payment section - Review Items */}
            <div className="payment__section">
            <div className="payment__title">
                <h3>Review Items and delivery</h3>
            </div>
            <div className="payment__items"> 
            {/* all the products in your basket */}
            {basket.map((item, index) => (
    <CheckoutProduct
        key={index} // Ensure each item has a unique key
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        rating={item.rating}
    />
))}
                
            </div>
        </div>
        
        {/* Payment section - Payment method */}
        <div className="payment__section">
            <div className="payment__title">
                <h3>Payment Method</h3>
            </div>
            <div className="payment__details">
                {/* Stripe magic will go */}
                <form action="" onClick={handleSubmit}>
                    <CardElement onChange={handleChange} />
                    <div className="payment__priceContainer">
                       {/* <NumberFormatBase
                       renderText={(value) => {
                        <h3>Order Total: {value}</h3>
                       
                       }}
                       decimalScale={2}
                       value={getBasketTotal(basket)}
                       displayType={"text"}
                       thousandSeparator={true}
                       prefix={"$"}
                       /> */}
                       
                 <h3>Order Total : 
                 <NumericFormat decimalScale={2} thousandSeparator={true} displayType='text' prefix='$' value={getBasketTotal(basket)}/>
                 </h3>
                 <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                 </button>
                    </div>

                    {/* Error */}
                    {error && <div>{error}</div>}
                </form>
            </div>
        </div>
        
            
        </div>
    </div>
  )
}

export default Payment