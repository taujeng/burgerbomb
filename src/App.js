import React, {useState, createContext} from 'react'
import { Outlet } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'


export const OrderContext = createContext();

const App = () => {

  const [order, setOrder] = useState([]);

  // function addToOrder(item){
  //   console.log(item);
  //   const newItem = {
  //     id: uuid(),
  //     order: item.category,
  //     name: item.name
  //   }
  //   setOrder([...order, newItem])
  // }

  return (
    <div>
      <Header/>
      <OrderContext.Provider value={{order, setOrder}}>
        <Outlet />
      </OrderContext.Provider>
      <Footer />
    </div>
  )
}

export default App
