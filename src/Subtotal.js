import React from 'react'
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';


function Subtotal() {
  const navigate = useNavigate();
  const [{basket}] = useStateValue();

  return (
    <div className='subtotal'>
      {/* price */}
      <CurrencyFormat
      renderText={(value) => (
        <>
        <h3>Order total: {value}</h3>
        </>
      )}
      decimalScale ={2}
      value={getBasketTotal(basket)}
      displayType={"text"}
      thousandSeperator={true}
      prefix={"$"}
      />
        <button onClick={e => navigate('/payment')}>Proceed to checkout</button>
        </div>
  )
}

export default Subtotal