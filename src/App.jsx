import HomePage from './Pages/HomePage'
import Checkout from './Pages/Checkout/Checkout'
import Orders from './Pages/Orders'
import Tracking from './Pages/Tracking'
import { Routes, Route } from "react-router"
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get("/api/cart-items?expand=product")
      .then((response) => {
        setCart(response.data);
      })
  }, [])

  function calculateCartQuantity() {
    return cart.reduce((accumlator, cartItem) => accumlator + cartItem.quantity, 0);
  }

  return (
    <>
      <Routes>
        {/* <Route path = "/" element = {<HomePage />} /> */}
        <Route index element={<HomePage
          cart={cart}
          calculateCartQuantity = {calculateCartQuantity}
          />} />
        <Route path="/checkout" element={<Checkout
          cart={cart}
          calculateCartQuantity = {calculateCartQuantity}
        />} />
        <Route path="/orders" element={<Orders
          calculateCartQuantity = {calculateCartQuantity}
          cart={cart}
        />} />
        <Route path="/tracking" element={<Tracking
          cart={cart}
        />} />
      </Routes>

    </>
  )
}

export default App
