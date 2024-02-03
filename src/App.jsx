import { useState } from 'react'
import MyReactComponent from './components/MyReactComponent.jsx'
import products from './data/Products.jsx'
import products_availability from './data/ProductsAvailability.jsx'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
 return(
<>
  <MyReactComponent products = { products }  products_availability = { products_availability } />    
</>
 ) 
}

export default App
