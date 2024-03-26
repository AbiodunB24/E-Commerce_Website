
import "./Subtotal.css"
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';
import { useNavigate } from "react-router-dom";
import { NumericFormat } from "react-number-format";

const Subtotal = () => {
    const navigate = useNavigate();
    const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
        <>
      <p>
        Subtotal ({basket.length} items): <strong> <NumericFormat decimalScale={2} thousandSeparator={true} displayType='text' prefix='$' value={getBasketTotal(basket)}/>
            </strong>
      </p>
      <small className='subtotal__gift' > <span ><input type="checkbox" /> This order contains a gift </span> </small>
    </>
    <button onClick={e => navigate('/payment') }>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal