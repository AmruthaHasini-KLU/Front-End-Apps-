import React, { useState } from "react";
import ProductList from "./ProductList";
import Header from './components/Header'
import Home from './components/Home'
import CartPage from './components/CartPage'

function App() {
  const [route, setRoute] = useState('home') // 'home' | 'products' | 'cart'

  const navigate = (to) => setRoute(to)

  return (
    <div>
      <Header navigate={navigate} />
      {route === 'home' && <Home navigate={navigate} />}
      {route === 'products' && <ProductList />}
      {route === 'cart' && <CartPage navigate={navigate} />}
    </div>
  );
}

export default App;
