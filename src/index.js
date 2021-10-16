import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserProvider from './contexts/User'
import { ToastContainer } from 'react-toastify'

ReactDOM.render(
  <UserProvider>
    <BrowserRouter>
      <App/>
      <ToastContainer/>
    </BrowserRouter>
  </UserProvider>,
  document.getElementById('root')
)

