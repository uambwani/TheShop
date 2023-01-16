import React from "react";

const Price = ({ salePrice, originalPrice }) => {
  return (
    <div className='shoe__price'>
      {salePrice ? (
        <>
          <span className='shoe__price--normal'>
            ${originalPrice.toFixed(2)}
          </span>
          ${salePrice.toFixed(2)}
        </>
      ) : (
        `$${originalPrice.toFixed(2)}`
      )}
    </div>
  );
};

export default Price;
