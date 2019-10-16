import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'
import Header from './components/header'
import HomePage from './pages/homepage'
import Shop from './pages/shop'
import Account from './pages/account'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route path='/signin' component={Account} />
      </Switch>
    </>
  )
}

export default App
