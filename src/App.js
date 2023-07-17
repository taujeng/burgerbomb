import React, {useState, createContext} from 'react'
import { Outlet } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import NavigationBar from './components/NavigationBar/NavigationBar.jsx'
import Footer from './components/Footer/Footer.jsx'
import { inject } from '@vercel/analytics'




export const OrderContext = createContext();

inject();

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
      <OrderContext.Provider value={{order, setOrder}}>
        <NavigationBar/>
        <Outlet />
        <Footer />
      </OrderContext.Provider>
    </div>
  )
}

export default App
