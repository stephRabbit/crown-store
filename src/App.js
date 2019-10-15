import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'
import Header from './components/header'
import HomePage from './pages/homepage'
import Shop from './pages/shop'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </>
  )
}

export default App
