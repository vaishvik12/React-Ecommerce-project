import './checkout.css'
import CheckoutHeader from "./CheckoutHeader";

import CheckoutPage from './CheckoutPage'

function Checkout({cart,calculateCartQuantity}){
  return(
    <>
    <title>Checkout</title>
    <link rel = "icon" type = "image/svg+xml" to = "images/cart-favicon.png" />
    <CheckoutHeader 
    calculateCartQuantity = {calculateCartQuantity}
    />
    <CheckoutPage
    cart = {cart}
    calculateCartQuantity = {calculateCartQuantity}
    />
    </>
  )
}

export default Checkout;