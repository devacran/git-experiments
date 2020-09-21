import React, { Fragment } from 'react'
import logo from './logo.svg'
import './styles/globalStyles.css'
import Home from './Pages/Home/'
import MyWishList from './Pages/MyWishList/'
import { BrowserRouter, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Home exact path="/" />
        <MyWishList exact path="/wishlist" />
      </Switch>
    </BrowserRouter>
  )
}

export default App
