import React from "react";
import Shoe from "./Shoe";
import { shoes } from "../data";

const Features = () => {
  return (
    <section id='recent'>
      <div className='container'>
        <div className='row'>
          <h2 className='section__title'>
            Discounted <span className='darker'>Shoes</span>
          </h2>
          <div className='shoes'>
            {shoes
              .slice()
              .filter((shoe) => shoe.salePrice > 0)
              .slice(0, 8)
              .map((shoe) => (
                <Shoe shoe={shoe} key={shoe.id} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
