import React, { useState, useEffect, useRef } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './components/header'
import HomePage from './pages/homepage'
import Shop from './pages/shop'
import Account from './pages/account'

import { auth } from './firebase'

import './App.css'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const unsubscribeFromAuth = useRef(null)

  useEffect(() => {
    unsubscribeFromAuth.current = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })

    return () => {
      unsubscribeFromAuth.current()
    }
  }, [])

  return (
    <>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route path='/signin' component={Account} />
      </Switch>
    </>
  )
}

export default App
