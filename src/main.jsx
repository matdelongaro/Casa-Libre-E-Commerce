import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './index.scss'

const root = document.getElementById('root')
const vRoot = ReactDOM.createRoot(root)

vRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
