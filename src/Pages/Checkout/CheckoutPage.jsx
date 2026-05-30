
import OrderSummary from './OrderSummary'
import PaymentSummary from './PaymentSummary'


function CheckoutPage({cart,calculateCartQuantity}){
  return (
        <div className="checkout-page">
      <div className="page-title">Review your order</div>

      <div className="checkout-grid">
      <OrderSummary 
        cart = {cart}
      />

      <PaymentSummary
      calculateCartQuantity = {calculateCartQuantity} />
      </div>
    </div>
  )
}

export default CheckoutPage;