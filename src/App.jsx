import HomePage from './Pages/HomePage'
import Checkout from './Pages/Checkout'
import Orders from './Pages/Orders'
import Tracking from './Pages/Tracking'
import {Routes,Route} from "react-router"
import './App.css'

function App() {
  return (
    <>
    <Routes>
      <Route path = "/" element = {<HomePage />} />
      <Route path = "/checkout" element = {<Checkout/>} />
      <Route path = "/orders" element = {<Orders />}/>
      <Route path = "/tracking" element = {<Tracking />}/>
    </Routes>

    </>
  )
}

export default App
