import React, {useState,useContext} from 'react'
import ChoicesItem from '../../../components/ChoicesItem/ChoicesItem'
import './choices.css'
import { PlusCircle, DashCircle } from "react-bootstrap-icons";
import { OrderContext } from '../../../App';
import { v4 as uuid} from 'uuid';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../../../utils/utils';

const Choices = ( {data} ) => {
    // data such as /Data/saladData.js
    const {order, setOrder} = useContext(OrderContext);

    const [name, setName] = useState(false)
    const [size, setSize] = useState("small");
    const [quantity, setQuantity] = useState(1);

    const navigate = useNavigate();

    // Selection will be different from burger's data structure:
    // will send a list of objects to add to order's list.
    // essentially, each item is it's own bagItem.
    // each object should contain: id, itemName, itemPrice, quantity,
    // itemDescription: [small]

    // When adding it to the order: 
    // const newOrder = {
    //     id: uuid(),
        //    itemName: "Chicken Salad",
        //    itemPrice: data["price"][size],
        //    itemDescription: [size] 

    // }

    // const orderSummary = name ? data.options.filter((x) => (
    //     x.name === name
    // )) : [{price: {small: 0, medium: 0, large: 0}}];
    // console.log(orderSummary)
    // const orderPrice = orderSummary[0]["price"][size]

    // Determine Price
    let orderSummary;
    let orderPrice = 0;

    if (name) {
        orderSummary =  data["options"].filter((x) => (
            x.name === name
        ))
        orderPrice = orderSummary[0]["price"][size]
    }

    function addOrder() {
        const summary = {
            id: uuid(),
            itemName: name, 
            itemPrice: orderPrice,
            itemQuantity: quantity,
            itemDescription: [size]
        }
        console.log(`Summary: ${summary}`)
        setOrder([...order, summary])
        navigate('/menu');
    }




  return (
    <div className="choices-container">
        <div className="choices-intro">
            <h2>{data["intro"]["title"]}</h2>
            <h1>{data["intro"]["subtitle"]}</h1>
            <p>{data["intro"]["description"]}</p>
        </div>
        <main>
            {data.options.map((item, index) => (
                <ChoicesItem key={index} info={item}
                name={name} size={size}
                setName={setName} setSize={setSize}/>
            ))}
        </main>
        <div className="choices-total">
                <div className="qty">
                    <button disabled={quantity == 1} onClick={()=> {setQuantity(quantity - 1)}}><DashCircle /></button>
                    {quantity}
                    <button onClick={()=> setQuantity(quantity + 1)}><PlusCircle /></button>
                </div>
                Price: {formatPrice(orderPrice * quantity)}
        </div>
        <div className="choices-addToOrder">
                <button onClick={addOrder} disabled={!name || !size} 
                className={(!name || !size) ? "disabled-btn" : "active-btn"}><b>Add to Order</b></button> 
        </div>
      
    </div>
  )
}

export default Choices
