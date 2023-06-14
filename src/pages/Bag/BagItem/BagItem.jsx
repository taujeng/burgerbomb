import React from 'react'
import './bagItem.css'

const BagItem = ( {item} ) => {
  return (
    <div className="bagItem-container">
        <div className="bagItem-title">
            <h2>{item.itemName}</h2>
            {item.itemPrice}
        </div>
        <div>
            {item.itemDescription.map((ingredient, index) => (
                <span className="ind-description" key={index}>• {ingredient}</span>
            ))}
        </div>

    </div>
  )
}

export default BagItem
