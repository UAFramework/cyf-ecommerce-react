import { useState } from 'react'
import MyReactComponent from './components/MyReactComponent.jsx'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyReactComponent />
    </>
  )
}
