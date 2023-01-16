import React from "react";
import { useParams } from "react-router";
import Ratings from "../components/ui/Ratings";
import Price from "../components/ui/Price";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import BestShoes from "../components/ui/BestShoes";

const ShoeInfo = ({ shoes, addItemToCart }) => {
  const { id } = useParams();
  const shoe = shoes.find((shoe) => +shoe.id === +id);

  return (
    <div id='shoes__body'>
      <main id='shoes__main'>
        <div className='shoes__container'>
          <div className='row'>
            <div className='shoe__selected--top'>
              <Link to='/shoes' className='shoe__link'>
                <FontAwesomeIcon icon='arrow-left' />
              </Link>
              <Link to='/shoes' className='shoe__link'>
                <h2 className='shoe__selected--title--top'>Shoes</h2>
              </Link>
            </div>
            <div className='shoe__selected'>
              <figure className='shoe__selected--figure'>
                <img className='shoe__selected--img' src={shoe.url} alt='' />
              </figure>
              <div className='shoe__selected--description'>
                <h2 className='shoe__selected--title'>{shoe.title}</h2>
                <Ratings rating={shoe.rating} />
                <div className='shoe__selected--price'>
                  <Price
                    originalPrice={shoe.originalPrice}
                    salePrice={shoe.salePrice}
                  />
                </div>
                <div className='shoe__summary'>
                  <h3 className='shoe__summary--title'>Summary</h3>
                  <p className='shoe__summary--para'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam, repellendus modi odio porro, consequuntur,
                    asperiores minima sint voluptatem at reiciendis ducimus
                    neque provident alias iure nihil explicabo nobis id
                    voluptas.
                  </p>
                  <p className='shoe__summary--para'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam, repellendus modi odio porro, consequuntur,
                    asperiores minima sint voluptatem at reiciendis ducimus
                    neque provident alias iure nihil explicabo nobis id
                    voluptas.
                  </p>
                </div>
                <button className='btn' onClick={() => addItemToCart(shoe)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='shoes__container'>
          <div className='row'>
            <div className='shoe__selected--top'>
              <h2 className='shoe__selected--title--top'>Recommended Shoes</h2>
            </div>
            <BestShoes id={id} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShoeInfo;
