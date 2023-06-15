import burgerData from "../../../Data/burgerData";
import Item from "../../../components/Item/Item";
import { useEffect, useState, useContext } from 'react';
import './burgers.css'
import { useOutletContext, useNavigate } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import { OrderContext } from "../../../App";
import { isDisabled } from "@testing-library/user-event/dist/utils";




const Burgers = () => {
    const { order, setOrder } = useContext(OrderContext)
    const [burgerPrice, setBurgerPrice] = useState(0);
    const [burgerType, setBurgerType] = useState(false);
    const [bunChoice, setBunChoice] = useState(false);
    const [vegChoices, setVegChoices] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [errorMsg, setErrorMsg] = useState(false);

    const navigate = useNavigate();

    useEffect(()=> {
        let pattyPrice = burgerType ? burgerData.meat.filter((x)=> x.name == burgerType)[0].price : 0;
        let veggieList = burgerData.veggies.filter((x)=> vegChoices.includes(x.name));
        let veggiePrice = 0;
        veggieList.forEach(item => veggiePrice += item.price)
        setBurgerPrice(pattyPrice + veggiePrice)

    },[burgerType, vegChoices, bunChoice])
    
    const addOrder = () => {
        const missingItems = [];
        if (!burgerType) missingItems.push("Type of burger");
        if (!bunChoice) missingItems.push("Choice of buns");
        
        if (!burgerType || !bunChoice) {
            setErrorMsg(`Don't forget the following: ${missingItems.join(", ")}!`)
        } else {
            setErrorMsg(false);
            console.log(burgerData.veggies.filter((x)=> vegChoices.includes(x.name)))
            console.log(burgerData.meat.filter((x)=> x.name == burgerType)[0].price)
            const burgerSummary = {
                id: uuid(),
                itemName: burgerType + " burger", 
                itemPrice: burgerPrice,
                itemQuantity: 1,
                itemDescription: [burgerType, bunChoice, ...vegChoices],
            };   
            setOrder([...order, burgerSummary]);
            // Navigate back to the main menu
            navigate('/menu');
            console.log(burgerSummary)
        }
        console.log(burgerType, bunChoice, vegChoices)
 
    }

    return (
        <div className="burgers-container">
            <div className="burgers-intro">
                <h2>Build your custom</h2>
                <h1>Burger</h1>
                <p>Our delicious handcrafted burgers always use the best possible ingredients!</p>
            </div>
            <main>
                                {/* {Object.entries(burgerData).map(([category, options]) => (
                    <div key={category}>
                    <h2>{category}:</h2>
                    <ul>
                        {options.map(option => (
                        <li key={option.id}>
                            {option.name} - ${option.price.toFixed(2)}
                        </li>
                        ))}
                    </ul>
                    </div>
                ))} */}
                <section>
                    <h3>Choice of burger</h3><span><p>required - limit of 1</p></span>
                    <ul>
                        {burgerData.meat.map((item)=> (<Item key={item.id}
                         singleSelection={true}
                         info={item} selection={burgerType}
                         setSelection={setBurgerType} />))}
                    </ul>
                </section>
                <section>
                    <h3>Buns</h3><span><p>required - limit of 1</p></span>
                    <ul>
                        {burgerData.buns.map((item)=> (<Item key={item.id} info={item}
                            singleSelection={true}
                            selection={bunChoice}
                            setSelection={setBunChoice}

                        />))}
                    </ul>
                </section>
                <section>
                    <h3>Veggies</h3>
                    <ul>
                        {burgerData.veggies.map((item)=> (<Item key={item.id} info={item}
                            singleSelection={false}
                            selection={vegChoices}
                            setSelection={setVegChoices}
                        />))}
                    </ul>
                </section>
                {/* {Object.entries(burgerData).map(([option, ingredient]) => (
                    <section>
                        <h3>Choose your {option}:</h3>
                        <ul>
                            {ingredient.map((item)=> (
                                (<Item key={item.id} info={item.name} />)
                            ))}
                        </ul>
                    </section>
                ))} */}

            </main>
            <div className="">Price: {burgerPrice}</div>
            <div className="order-container">
                <button onClick={addOrder} disabled={!burgerType || !bunChoice} 
                className={(!burgerType || !bunChoice) ? "disabled-btn" : "active-btn"}><b>Add to Order</b></button>
                {errorMsg ? errorMsg : null}

            </div>
        </div>   
    )
}

export default Burgers;
























