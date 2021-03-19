
import React from 'react';

import './App.css';
import Cart from './Components/Cart'



export default function App() {
  return (
    <div className="box">
      <Cart name="Chicago Pizza"/>
      <Cart name="Neoplitan Pizza"/>
      <Cart name="Newyork Pizza"/>
      <Cart name="Salami Pizza"/>
      
    </div>
  )
}
