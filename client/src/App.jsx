import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
