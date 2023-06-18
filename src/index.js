import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
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


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Landing />}/>
      <Route path="/menu" element={<Menu />}/>
      <Route path="/menu/burgers" element={<Burgers />}/>
      <Route path="/menu/salads" element={<Choices data={saladData}/>}/>
      <Route path="/bag" element={<Bag />}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
