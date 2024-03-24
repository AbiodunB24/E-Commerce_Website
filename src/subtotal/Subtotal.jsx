import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';

const Subtotal = () => {
    const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
        <>
      <p>
        Subtotal ({basket.length} items): <strong> {getBasketTotal(basket)} 
            </strong>
      </p>
      <small className='subtotal__gift' > <span ><input type="checkbox" /> This order contains a gift </span> </small>
    </>
    <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal