import React, {useState} from 'react'
import { Card } from 'react-bootstrap'
import './choicesItem.css'
import { formatPrice } from '../../utils/utils'
import { ChevronCompactRight, ChevronCompactLeft } from 'react-bootstrap-icons'

const ChoicesItem = ( {info, name, setName, setSizes} ) => {
    const [open, setOpen] = useState(false);
    const [size, setSize] = useState("small");

    const selected = name === info.name

    function handleMain() {
        console.log(name)
        if (name === info.name) {
            setName(false);
        } else {
            setName(info.name)
        }
        setSizes(prev => (
            {...prev, [info.name]: size}
        ))
    }
    // disabled={name !== false && name !== info.name}
    function handleSizeChange(selectedSize) {
        setSize(selectedSize);
        setSizes(prev => (
            {...prev, [info.name]: selectedSize}
        ))
    }



  return (
    <div className={`choicesItem-container ${open ? "active" : ""}` } >
        <button className={`choicesItem-main ${selected ? "selected": ""}`}
         onClick={handleMain}>
            {info.image && 
                <div className="choiceItem-image-overlay">
                    <img className="choiceItem-image" src={info.image} alt=""></img>
                </div>
            }
            <div className="choicesItem-main-body">
                <Card.Title>{info.name}</Card.Title>
                {formatPrice(info["price"][size])}
            </div>
            <div className="choicesItem-main-side" onClick={(e)=> {e.stopPropagation();  setOpen(!open)}}>
                {open ? <ChevronCompactLeft className="extension" /> 
                : <ChevronCompactRight className="extension" onClick={()=> setOpen(true)} />}
            </div>
        </button>
        <div className="choicesItem-side">
            <div className={`circle-button ${size === "small" ? "selected": ""}`} onClick={()=> handleSizeChange("small")}><b>S</b></div>
            <div className={`circle-button ${size === "medium" ? "selected": ""}`} onClick={()=> handleSizeChange("medium")}><b>M</b></div>
            <div className={`circle-button ${size === "large" ? "selected": ""}`} onClick={()=> handleSizeChange("large")}><b>L</b></div>
        </div>
    </div>
  )
}

export default ChoicesItem