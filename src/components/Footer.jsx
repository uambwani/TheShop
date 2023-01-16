import React from "react";
import { Link } from "react-router-dom";
import shopLogo from "../assets/shopLogo.svg";

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='row row__column'>
          <Link to='/'>
            <figure className='footer__logo'>
              <img src={shopLogo} className='footer__logo--img' alt='' />
            </figure>
          </Link>
          <div className='footer__list'>
            <Link to='/' className='footer__link'>
              Home
            </Link>
            <span className='footer__link no-cursor'>About</span>
            <Link to='/shoes' className='footer__link'>
              Shoes
            </Link>
            <Link to='/cart' className='footer__link'>
              Cart
            </Link>
          </div>
          <div className='footer__copyright'>Copyright &copy; 2022 Shop</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
