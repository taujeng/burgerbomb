import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';
import "./bag.css"
import BagItem from './BagItem/BagItem';

const Bag = () => {
  const [order, addToOrder] = useOutletContext();
    console.log(order)


  return (
    <div className="bag-container">
        <h1>Your bag</h1>
        {order[0] ?
        order.map((item)=> (
          <BagItem key={item.id} item={item}/>
        ))
        :
        <div className="empty-bag">
            <h2>...is currently empty.</h2>
            <p>Here are some things that would fit nicely in the bag!</p>
            <LinkContainer to='/menu'>
                <Button className="empty-bag-btn">menu</Button>
            </LinkContainer>
        </div>}
        <div className="bag-options">
            <LinkContainer to='/menu'>
                <Button className="empty-bag-btn option">Back to the Menu</Button>
            </LinkContainer>
            <LinkContainer to='/'>
                <Button className="full-bag-btn option">Finish Order</Button>
            </LinkContainer>
        </div>
    </div>
  )
}

export default Bag
