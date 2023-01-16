import React, { useState, useEffect } from "react";
import Shoe from "../components/Shoe";

const Shoes = ({ shoes: initalShoes }) => {
  const [shoes, setShoes] = useState();

  useEffect(() => {
    setShoes(initalShoes);
  }, [initalShoes]);

  function filterShoes(filter) {
    switch (filter) {
      case "LOW_TO_HIGH":
        return setShoes(
          shoes
            .slice()
            .sort(
              (a, b) =>
                (a.salePrice || a.originalPrice) -
                (b.salePrice || b.originalPrice)
            )
        );
      case "HIGH_TO_LOW":
        return setShoes(
          shoes
            .slice()
            .sort(
              (a, b) =>
                (b.salePrice || b.originalPrice) -
                (a.salePrice || a.originalPrice)
            )
        );
      case "RATING":
        return setShoes(shoes.slice().sort((a, b) => b.rating - a.rating));
      default:
        break;
    }
  }

  return (
    <div id='shoes__body'>
      <main id='shoes__main'>
        <section>
          <div className='shoes__container'>
            <div className='row'>
              <div className='shoes__header'>
                <h2 className='section__title shoes__header--title'>
                  All shoes
                </h2>
                <select
                  id='filter'
                  onChange={(event) => filterShoes(event.target.value)}
                  defaultValue={"DEFAULT"}
                >
                  <option value='DEFAULT' disabled>
                    Sort
                  </option>
                  <option value='LOW_TO_HIGH'>Price, Low to High</option>
                  <option value='HIGH_TO_LOW'>Price, High to Low</option>
                  <option value='RATING'>Rating</option>
                </select>
              </div>
              <div className='shoes'>
                {shoes &&
                  shoes.map((shoe) => {
                    return <Shoe shoe={shoe} key={shoe.id} />;
                  })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Shoes;
