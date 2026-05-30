import formatCurrency from "../../utils/formatCurrency"
import DeliveryOptions from './DeliveryOptions'
import {useState,useEffect} from 'react';
import axios from 'axios';
import dayjs from 'dayjs';

function OrderSummary({cart}){
  const [deliveryOptions, setDeliveryOptions] = useState([]);

  useEffect(() => {
    axios.get("/api/delivery-options")
    .then((response) => {
      setDeliveryOptions(response.data);
    })
  },[]);
  return (
        <div className="order-summary">
        {cart.map((cartItem) => {
        const matchingDeliveryOption =  deliveryOptions.find(deliveryOption => {
            return cartItem.deliveryOptionId === deliveryOption.id
          })
         
          return (
            <div className="cart-item-container" key = {cartItem.id}>
            <div className="delivery-date">
              Delivery date: {matchingDeliveryOption && dayjs().add(matchingDeliveryOption.deliveryDays, 'days').format("MMMM DD")}
            </div>

            <div className="cart-item-details-grid">
              <img className="product-image"
                src={cartItem.product.image} />

              <div className="cart-item-details">
                <div className="product-name">
                 {cartItem.product.name}
                </div>
                <div className="product-price">
                  {formatCurrency(cartItem.product.priceCents)}
                </div>
                <div className="product-quantity">
                  <span>
                    Quantity: <span className="quantity-label">{cartItem.quantity}</span>
                  </span>
                  <span className="update-quantity-link link-primary">
                    Update
                  </span>
                  <span className="delete-quantity-link link-primary">
                    Delete
                  </span>
                </div>
              </div>

              <DeliveryOptions 
              cartItem = {cartItem}
              deliveryOptions = {deliveryOptions}
              />
            </div>
          </div>
          )
        })}
        </div>
  )
}

export default OrderSummary;