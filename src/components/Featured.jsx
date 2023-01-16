import React from "react";
import BestShoes from "./ui/BestShoes";

const Featured = () => {
  return (
    <section id='features'>
      <div className='container'>
        <div className='row'>
          <h2 className='section__title'>
            Featured <span className='darker'>Shoes</span>
          </h2>
          <BestShoes />
        </div>
      </div>
    </section>
  );
};

export default Featured;
