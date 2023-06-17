import React, { useContext } from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';
import "./bag.css"
import BagItem from './BagItem/BagItem';
import { OrderContext } from '../../App';
import { formatPrice } from '../../utils/utils';

const Bag = () => {
  const { order, setOrder } = useContext(OrderContext)
    console.log(order)
  
  let totalCost = 0;
  order.forEach(item => {
    totalCost += item["itemQuantity"] * item["itemPrice"]
  })


  return (
    <div className="bag-container">
        <h1>Your bag</h1>
        {order[0] ?
        (
        <div className="bag-full">
          {order.map((item)=> (
            <BagItem key={item.id} item={item}/>
          ))}
          Your Total: {formatPrice(totalCost)}
          <div className="bag-options">
            <LinkContainer to='/menu'>
                <Button className="empty-bag-btn option">Back to the Menu</Button>
            </LinkContainer>
            <LinkContainer to='/'>
                <Button className="full-bag-btn option">Finish Order</Button>
            </LinkContainer>
          </div>

        </div>)
        :
        <div className="empty-bag">
            <h2>...is currently empty.</h2>
            <img src="./images/empty-bag.svg" alt="empty-canvas" />
            <p>Here are some things that would fit nicely in the bag!</p>
            <LinkContainer to='/menu'>
                <Button className="empty-bag-btn">Menu</Button>
            </LinkContainer>
        </div>}

    </div>
  )
}

export default Bag
