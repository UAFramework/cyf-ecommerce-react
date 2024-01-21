import React from 'react'   // import React component from react module
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // import a App component from ./App.jsx module
import './index.css'        // import styles

ReactDOM.createRoot(document.getElementById('root'))
.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
