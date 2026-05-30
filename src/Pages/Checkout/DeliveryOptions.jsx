
import dayjs from 'dayjs';
import formatCurrency from '../../utils/formatCurrency'

function DeliveryOptions({cartItem, deliveryOptions}){
  return (
                  <div className="delivery-options">
                <div className="delivery-options-title">
                  Choose a delivery option:
                </div>
              
              {deliveryOptions.map(deliveryOption => {
                return (
                     <div className="delivery-option" key = {deliveryOption.id}>
                  <input type="radio" 
                  checked = {cartItem.deliveryOptionId === deliveryOption.id}
                    className="delivery-option-input"
                    name={`delivery-option-${cartItem.id}`} />
                  <div>
                    <div className="delivery-option-date">
                      {/* Tuesday, June 21 */}
                      {dayjs().add(deliveryOption.deliveryDays, 'days').format("dddd, MMMM DD")}
                    </div>
                    <div className="delivery-option-price">
                      {deliveryOption.priceCents === 0 
                      ? "FREE Shipping"
                      : formatCurrency(deliveryOption.priceCents) + ' - Shipping'} 
                    </div>
                  </div>
                </div>
                )
              })}
 
              </div>
  )
}

export default DeliveryOptions;