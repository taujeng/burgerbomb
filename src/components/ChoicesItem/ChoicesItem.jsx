import React, {useState} from 'react'
import { Card } from 'react-bootstrap'
import './choicesItem.css'
import { formatPrice } from '../../utils/utils'

const ChoicesItem = ( {info, name, setName, size, setSize} ) => {
    const [open, setOpen] = useState(false);

    const selected = name === info.name

    function handleMain() {
        console.log(name)
        setOpen(!open);
        if (name === info.name) {
            setName(false);
        } else if (!name) {
            setName(info.name)
        } else {
            console.log("multiple")
        }
    }
    // disabled={name !== false && name !== info.name}


  return (
    <div className={`choicesItem-container ${open && "active"}` } >
        <button className={`choicesItem-main ${selected ? "selected": ""}`}
         onClick={handleMain}
         disabled={name !== false && name !== info.name}>
            <Card.Title>{info.name}</Card.Title>
            {formatPrice(info["price"][size])}
        </button>
        <button className="choicesItem-side" disabled={name !== false && name !== info.name}>
            <div className={`circle-button ${size === "small" ? "selected": ""}`} onClick={()=> setSize("small")}><b>S</b></div>
            <div className={`circle-button ${size === "medium" ? "selected": ""}`} onClick={()=> setSize("medium")}><b>M</b></div>
            <div className={`circle-button ${size === "large" ? "selected": ""}`} onClick={()=> setSize("large")}><b>L</b></div>
        </button>
    </div>
  )
}

export default ChoicesItem
