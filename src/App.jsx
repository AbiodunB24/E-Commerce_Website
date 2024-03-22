import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./header/Header";
import Home from "./home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./checkout/Checkout";

function App() {
  return (
    //BEM
    <div className="app">
      
      <Routes>
      <Route path="/checkout" element={<div><Header /> <Checkout/> </div> }/>
        <Route path="/" element={<div><Header /> <Home/> </div> }/>
        
      </Routes>
     
    </div>
  );
}

export default App;
