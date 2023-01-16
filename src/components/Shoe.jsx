import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Price from "./ui/Price";
import Ratings from "./ui/Ratings";

const Shoe = ({ shoe }) => {
  const [img, setImg] = useState();

  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = shoe.url;
    image.onload = () => {
      setTimeout(() => {
        if (mountedRef.current) {
          setImg(image);
        }
      }, 300);
    };
    return () => {
      mountedRef.current = false;
    };
  }, [shoe.url]);

  return (
    <div className='shoe'>
      {!img ? (
        <>
          <div className='shoe__img--skeleton'></div>
          <div className='skeleton shoe__title--skeleton'></div>
          <div className='skeleton shoe__rating--skeleton'></div>
          <div className='skeleton shoe__price--skeleton'></div>
        </>
      ) : (
        <>
          <Link to={`/shoe/${shoe.id}`}>
            <figure className='shoe__img--wrapper'>
              <img className='shoe__img' src={img.src} alt='' />
            </figure>
          </Link>
          <div className='shoe__title'>
            <Link to={`/shoe/${shoe.id}`} className='shoe__title--link'>
              {shoe.title}
            </Link>
          </div>
          <Ratings rating={shoe.rating} />
          <Price
            originalPrice={shoe.originalPrice}
            salePrice={shoe.salePrice}
          />
        </>
      )}
    </div>
  );
};

export default Shoe;
