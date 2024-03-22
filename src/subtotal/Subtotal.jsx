import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'

const Subtotal = ({ value, decimalScale = 2, displayType = "text", thousandSeparator = true, prefix = "$" }) => {
  return (
    <div className='subtotal'>
        <>
      <p>
        Subtotal (0 items): <strong> 0
            </strong>
      </p>
      <small className='subtotal__gift' > <span ><input type="checkbox" /> This order contains a gift </span> </small>
    </>
    <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal