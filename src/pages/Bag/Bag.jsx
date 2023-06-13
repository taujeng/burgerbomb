import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';
import "./bag.css"

const Bag = () => {
  const [order, addToOrder] = useOutletContext();
    console.log(order)


  return (
    <div className="bag-container">
        <h1>Your bag</h1>
        {/* {orderInfo ?
        <h1> order info</h1>
        :
        <div className="empty-bag">
            <h2>...is currently empty.</h2>
            <p>Here are some things that would fit nicely in the bag!</p>
            <LinkContainer to='/menu'>
                <Button className="empty-bag-btn"></Button>
            </LinkContainer>
        </div>} */}
    </div>
  )
}

export default Bag
