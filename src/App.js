import React, { useEffect, useRef } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { setCurrentUser } from './store/ducks/user/actions'

import Header from './components/header'
import HomePage from './pages/homepage'
import Shop from './pages/shop'
import Account from './pages/account'

import { auth, createUserProfileDocument } from './firebase'

import './App.css'

function App({ setCurrentUser }) {
  const unsubscribeFromAuth = useRef(null)

  useEffect(() => {
    unsubscribeFromAuth.current = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth)
    })

    return () => {
      unsubscribeFromAuth.current()
    }
  }, [unsubscribeFromAuth, setCurrentUser])

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

export default connect(
  null,
  { setCurrentUser }
)(App)
