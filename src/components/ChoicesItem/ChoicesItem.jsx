import React, {useState} from 'react'
import { Card } from 'react-bootstrap'
import './choicesItem.css'

const ChoicesItem = ( {info} ) => {
    const [open, setOpen] = useState(false);
    const [size, setSize] = useState("small");


  return (
    <div className={`choicesItem-container ${open && "active"}`}>
        <Card className="choicesItem-main" onClick={()=> setOpen(!open)}>
            <Card.Title>{info.name}</Card.Title>
            {info["price"][size]}
        </Card>
        <Card className="choicesItem-side">
            <div className="circle-button"><b>S</b></div>
            <div className="circle-button"><b>M</b></div>
            <div className="circle-button"><b>L</b></div>
        </Card>
    </div>
  )
}

export default ChoicesItem
