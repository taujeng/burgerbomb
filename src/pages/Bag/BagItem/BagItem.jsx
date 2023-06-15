import React, {useContext} from 'react'
import './bagItem.css'
import { Trash } from 'react-bootstrap-icons'
import { OrderContext } from '../../../App'

const BagItem = ( {item} ) => {
  const { order, setOrder } = useContext(OrderContext)

  function handleRemove() {
    const updatedOrder = order.filter((ind) => (
      ind.id !== item.id
    ))
    setOrder(updatedOrder);
  }

  return (
    <div className="bagItem-container">
      <div className="bagItem-top">
        <div className="bagItem-title">
              <h2>{item.itemName}</h2>
        </div>
        <div className="bagItem-right">
          {item.itemPrice}
        </div>

      </div>
      <div className="bagItem-bot">
        <div>
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
