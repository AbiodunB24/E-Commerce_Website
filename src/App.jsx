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
  })

  return (
    //BEM
    <div className="app">
      
      <Routes>
      <Route path="/checkout" element={<div><Header /> <Checkout/> </div> }/>
        <Route path="/" element={<div><Header /> <Home/> </div> }/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
