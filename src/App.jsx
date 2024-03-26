import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./header/Header";
import Home from "./home/Home";
import {  Route, Routes } from "react-router-dom";
import Checkout from "./checkout/Checkout";
import Login from "./Login/Login";
import { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Payment from "./payment/Payment"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51OyUoIJeoJTrziWF9tjqtUrlFLgZvLENeQEupmnahFF13ByNrAtQKEvh6uMzlBpVLTjK8eG6IYZNPLYMOxgkxw4T00QJX7fky3");

function App() {
  const [{ user }, dispatch] = useStateValue();


  useEffect(() => {
    // will only run once when the app component loads ...

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if(authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logges out

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    //BEM
    <div className="app">
      
      <Routes>
      <Route path="/checkout" element={<div><Header /> <Checkout/> </div> }/>
        <Route path="/" element={<div><Header /> <Home/> </div> }/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/payment" element={<div><Header/> <Elements stripe={promise}> <Payment/> </Elements> </div>} />
      </Routes>
     
    </div>
  );
}

export default App;
