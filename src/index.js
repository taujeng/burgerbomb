import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';
import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import Landing from './pages/Landing/Landing.jsx';
import Menu from './pages/Menu/Menu.jsx'
import Burgers from './pages/Menu/Burgers/Burgers';
import Bag from './pages/Bag/Bag';
import Choices from './pages/Menu/Choices/Choices';
import saladData from './Data/saladData';
import sidesData from './Data/sidesData'
import drinksData from './Data/drinksData'
import Construction from './pages/Construction/Construction';
import OurStory from './pages/OurStory/OurStory';
import Rewards from './pages/Rewards/Rewards';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Landing />}/>
      <Route path="/menu" element={<Menu />}/>
      <Route path="/menu/burgers" element={<Burgers />}/>
      <Route path="/menu/salads" element={<Choices data={saladData}/>}/>
      <Route path="/menu/sides" element={<Choices data={sidesData}/>}/>
      <Route path="/menu/drinks" element={<Choices data={drinksData}/>}/>
      <Route path="/our-story" element={<OurStory />}/>
      <Route path="/rewards" element={<Rewards />}/>
      <Route path="/bag" element={<Bag />}/>
      <Route path="/checkout" element={<Construction />}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
