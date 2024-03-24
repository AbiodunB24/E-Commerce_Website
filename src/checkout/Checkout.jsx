import React from "react";
import "./Checkout.css";
import Subtotal from "../subtotal/Subtotal";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = (id, image, title, price, rating) => {
    const [{ basket, user }, dispatch] = useStateValue();
    console.log(basket)
      

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div >
            <h2 className="checkout__title">
                <h3>Hello, {user?.email}</h3>
                Your Shopping Basket </h2>
      <div>
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
      </div>
      <div className="checkout__right">
        <Subtotal/>
      </div>
    </div>
  );
};

export default Checkout;
