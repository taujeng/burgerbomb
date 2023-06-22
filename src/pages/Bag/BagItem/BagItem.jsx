import React, {useContext} from 'react'
import './bagItem.css'
import { Trash } from 'react-bootstrap-icons'
import { OrderContext } from '../../../App'
import { DashCircle, PlusCircle } from 'react-bootstrap-icons'
import { formatPrice } from '../../../utils/utils'

const BagItem = ( {item} ) => {
  const { order, setOrder } = useContext(OrderContext)
  console.log(item, order)

  function handleRemove() {
    const updatedOrder = order.filter((ind) => (
      ind.id !== item.id
    ))
    setOrder(updatedOrder);
  }

  function handleIncrease() {
    // const orderCopy = [...order];
    // const itemIndex = orderCopy.findIndex(ind => ind.id === item.id)
    // const updateOrder = {...orderCopy.itemIndex, itemQuantity: orderCopy[itemIndex].itemQuantity + 1}
    // orderCopy[itemIndex] = updateOrder
    // setOrder(orderCopy);
    const orderCopy = [...order];
    const itemIndex = orderCopy.findIndex(ind => ind.id === item.id);
  
    if (itemIndex !== -1) {
      const updatedItem = { ...orderCopy[itemIndex] };
      updatedItem.itemQuantity += 1;
  
      orderCopy[itemIndex] = updatedItem;
      setOrder(orderCopy);
    }

  }

  function handleDecrease() {
    const orderCopy = [...order];
    const itemIndex = orderCopy.findIndex(ind => ind.id === item.id);
  
    if (itemIndex !== -1) {
      const updatedItem = { ...orderCopy[itemIndex] };
      updatedItem.itemQuantity -= 1;
  
      orderCopy[itemIndex] = updatedItem;
      setOrder(orderCopy);
    } 
  }

  return (
    <div className="bagItem-container">

      <div className="bagItem-top">
        <div className="bagItem-qty">
          <button onClick={handleDecrease} disabled={item.itemQuantity === 1}><DashCircle className="qty-btn"/></button>
            {item.itemQuantity}
            <button onClick={handleIncrease}><PlusCircle className="qty-btn"/></button>
        </div>
        <div className="bagItem-title">
              <h2>{item.itemName}</h2>
        </div>
        <div className="bagItem-price">
          {formatPrice(item.itemPrice * item.itemQuantity)}
        </div>

      </div>
      <div className="bagItem-bot">
        <div className="group-description">
            {item.itemDescription.map((ingredient, index) => (
                <span className="ind-description" key={index}>• {ingredient}</span>
            ))}
        </div>
        <div className="bagItem-right">
          <Trash onClick={handleRemove}/>
        </div>

      </div>


    </div>
  )
}

export default BagItem
