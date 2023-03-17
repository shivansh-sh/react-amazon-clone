import React, {useEffect} from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Orders from './Orders';

import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51MlbQNSHjyM4n5Q4GpbjsGA1RXrTPkoNZ7J71Rj56U4RQjx9vWFW1kctq7EtLprkXI51Fx2mbsDk4sTzNIGwwORY004cbuQtCX'
);



function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(()=> {
    // will only run once when the app component loads 
    auth.onAuthStateChanged(authUser => {
      console.log('the user is ', authUser)
      
      if(authUser){
        // the user is just logged in or was logged in 
      dispatch({
        type: 'SET_USER',
        user: authUser,
      })
    }
    
    else{
      // the usr logged out 
      dispatch({
        type: 'SET_USER',
        user: null,
      })
    }
    
  })


  }, [])
  return ( 
    <Router>
    <div className="App">
     <Routes>
     <Route path="/checkout" element={(<><Header/><Checkout/></>)} />
     <Route path="/payment" element={(<><Header/>
     <Elements stripe={promise}>
     <Payment/>
     </Elements>
     
     </>)} />

     <Route path="/login" element={(<Login></Login>)} />
     <Route path="/orders" element={(<Orders></Orders>)} />

     <Route path="/" element={(<><Header/><Home/></>)}/>

     </Routes>
     
    </div>
    </Router>
  );
}


export default App;
