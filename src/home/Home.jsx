import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
        className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
        <Product 
        id="871236"
        title='Apple AirPods Pro' 
        price={249.00}
        image="https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._AC_SL1500_.jpg"
        rating={2}
        />
        <Product
        id="549812"
        title="Sony WH-1000XM4 Wireless Headphones"
        price={348.00}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg"
        />
        
        </div>

        <div className="home__row">
        <Product
        id="327465"
        title='Apple Watch Series 6' 
        price={399.99}
        image="https://images-na.ssl-images-amazon.com/images/I/71fwbMm1NBL._AC_SL1500_.jpg"
        rating={3}/>
        <Product
        id="951246"
        title='Sony PlayStation 5 Console' 
        price={499.00}
        image="https://images-na.ssl-images-amazon.com/images/I/619BkvKW35L._AC_SL1500_.jpg"
        rating={5}
        />
        <Product
        id="684732"
        title='Apple MacBook Pro (13-inch, M1 Chip)' 
        price={1297.99}
        image="https://images-na.ssl-images-amazon.com/images/I/71vFKBpKakL._AC_SL1500_.jpg"
        rating={4}
        />
        </div>
        <div className="home__row">
        <Product
        id="215479"
        title='Amazon Fire TV Stick 4K' 
        price={49.00}
        image="https://images-na.ssl-images-amazon.com/images/I/51CgKGfMelL._AC_SL1000_.jpg"
        rating={2}
        />
           
        </div>

      </div>
    </div>
  );
};

export default Home;
