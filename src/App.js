import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shoes from "./pages/Shoes";
import ShoeInfo from "./pages/ShoeInfo";
import { shoes } from "./data";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  function addItemToCart(shoe) {
    const dupeItem = cart.find((item) => item.id === shoe.id);
    setCart((oldCart) =>
      dupeItem
        ? [
            ...oldCart.map((item) => {
              return item.id === dupeItem.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item;
            }),
          ]
        : [...oldCart, { ...shoe, quantity: 1 }]
    );
  }

  function updateCart(item, newQuantity) {
    setCart((oldCart) =>
      oldCart.map((oldItem) => {
        if (oldItem.id === item.id) {
          return {
            ...oldItem,
            quantity: newQuantity,
          };
        } else {
          return oldItem;
        }
      })
    );
  }

  function removeItem(item) {
    setCart((oldCart) => oldCart.filter((cartItem) => cartItem.id !== item.id));
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += +item.quantity;
    });
    return counter;
  }

  function calcPrices() {
    let total = 0;
    cart.forEach((item) => {
      total += (item.salePrice || item.originalPrice) * item.quantity;
    });
    return {
      subtotal: total * 0.9,
      tax: total * 0.1,
      total,
    };
  }

  return (
    <Router>
      <div className='App'>
        <Nav numberOfItems={numberOfItems()} />
        <Route path='/' exact render={() => <Home shoes={shoes} />} />
        <Route path='/shoes' exact render={() => <Shoes shoes={shoes} />} />
        <Route
          path='/shoe/:id'
          render={() => (
            <ShoeInfo shoes={shoes} addItemToCart={addItemToCart} />
          )}
        />
        <Route
          path='/cart'
          render={() => (
            <Cart
              cart={cart}
              updateCart={updateCart}
              removeItem={removeItem}
              totals={calcPrices()}
            />
          )}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
