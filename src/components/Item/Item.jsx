import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import './item.css'

const Item = ( {info, singleSelection, selection, setSelection} ) => {
  const selected = singleSelection ? selection === info.name :  selection.includes(info.name)
  // const selected = selection === info.name;
  // const selected = selection.includes(info.name)

  const handleClick = () => {
    if (singleSelection) {
      if (!selection) {
        setSelection(info.name);
      } else if (info.name === selection) {
        setSelection(false)
      } else {
        alert("Only one selection please!")
      }
    } else {
      if (!selection.includes(info.name)) {
        setSelection([...selection, info.name])
      } else {
        let new1 = selection.filter((item)=> item !== info.name)
        setSelection(new1)
      }
    }
  }



  return (
    <Card className="item-container" onClick={handleClick} style={{backgroundColor: selected ? "rgba(176,219,118,1.00)" : null}}>
        <Card.Title>
            {`${info.name} ${info.price > 0 ? "- " + info.price : ""}`}
        </Card.Title>  
    </Card>
  )
}

export default Item;
