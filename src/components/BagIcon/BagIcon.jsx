import React, {useContext} from 'react'
import { BagFill } from 'react-bootstrap-icons'
import { LinkContainer } from 'react-router-bootstrap'
import "./bagIcon.css"
import { OrderContext } from '../../App'

const BagIcon = ( { className }) => {
    const { order, setOrder } = useContext(OrderContext)


  return (


    <LinkContainer to="/bag">
        <div className="bagIcon-container">
            <BagFill className={`bag-icon ${className}`} size={32}/>
            {order.length > 0 && <h1>{order.length}</h1>}
        </div>
    </LinkContainer>


  )
}

export default BagIcon
