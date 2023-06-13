import burgerData from "../../../Data/burgerData";
import Item from "../../../components/Item/Item";
import { useState } from 'react';
import './burgers.css'
import { useOutletContext } from "react-router-dom";


const Burgers = () => {
    const addToOrder = useOutletContext();
    const [burgerType, setBurgerType] = useState(false);
    const [bunChoice, setBunChoice] = useState(false);
    const [vegChoices, setVegChoices] = useState([]);
    const [errorMsg, setErrorMsg] = useState(false);
    
    const addOrder = () => {
        const missingItems = [];
        if (!burgerType) missingItems.push("Type of burger");
        if (!bunChoice) missingItems.push("Choice of buns");
        
        if (!burgerType || !bunChoice) {
            setErrorMsg(`Don't forget the following: ${missingItems.join(", ")}!`)
        } else {
            setErrorMsg(false);
            const burgerSummary = [];   
            burgerSummary.push(burgerType, bunChoice, vegChoices);
            addToOrder(burgerSummary);
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
                    <h3>Choice of burger</h3>
                    <ul>
                        {burgerData.meat.map((item)=> (<Item key={item.id}
                         singleSelection={true}
                         info={item} selection={burgerType}
                         setSelection={setBurgerType} />))}
                    </ul>
                </section>
                <section>
                    <h3>Buns</h3>
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
            <div className="order-container">
                <button onClick={addOrder}>Add to order</button>
                {errorMsg ? errorMsg : null}

            </div>
        </div>   
    )
}

export default Burgers;
























