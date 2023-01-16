import React from "react";
import landingLogo from "../assets/landingLogo.svg";

const Landing = () => {
  return (
    <section id='landing'>
      <header>
        <div className='header__container'>
          <div className='header__description'>
            <h1>Elevate your Sneaker Game</h1>
            <h2>
              Find your dream kicks at our <span className='darker'>Shop</span>
            </h2>
            <a href='#features'>
              <button className='btn'>Browse shoes</button>
            </a>
          </div>
          <figure className='header__img--wrapper'>
            <img src={landingLogo} alt='' />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Landing;
