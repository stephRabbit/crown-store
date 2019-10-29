import React, { useEffect, useRef } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { setCurrentUser } from './store/ducks/user/actions'
import { selectCurrentUser } from './store/ducks/user/selectors'

import Header from './components/header'
import HomePage from './pages/homepage'
import Shop from './pages/shop'
import Account from './pages/account'
import Checkout from './pages/checkout'

import { auth, createUserProfileDocument } from './firebase'

import './App.css'

function App({ setCurrentUser, currentUser }) {
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
        <Route exact path='/checkout' component={Checkout} />
        <Route
          exact
          path='/signin'
          render={() => (currentUser ? <Redirect to='/' /> : <Account />)}
        />
      </Switch>
    </>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(
  mapStateToProps,
  { setCurrentUser }
)(App)
