import React, {useState} from 'react'
import ChoicesItem from '../../../components/ChoicesItem/ChoicesItem'
import './choices.css'

const Choices = ( {data} ) => {
    const [selection, setSelections] = useState([])

    // Selection will be different from burger's data structure:
    // will send a list of objects to add to order's list.
    // essentially, each item is it's own bagItem.
    // each object should contain: id, itemName, itemPrice, quantity,
    // itemDescription: [small]

    // When adding it to the order: 
    // const newOrder = {
    //     id: uuid(),

    // }

  return (
    <div className="choices-container">
        <div className="choices-intro">
            <h2>{data["intro"]["title"]}</h2>
            <h1>{data["intro"]["subtitle"]}</h1>
            <p>{data["intro"]["description"]}</p>
        </div>
        <main>
            {data["options"].map((item, index) => (
                <ChoicesItem key={index} info={item}/>
            ))}
        </main>
      
    </div>
  )
}

export default Choices
