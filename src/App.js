import React, { useEffect, useRef } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {
  auth,
  createUserProfileDocument,
  addCollectionDocuments
} from './firebase'

import { setCurrentUser } from './store/ducks/user/actions'
import { selectCurrentUser } from './store/ducks/user/selectors'
import { selectShopCollectionsForPreview } from './store/ducks/shop/selectors'

import Header from './components/header'
import HomePage from './pages/homepage'
import Shop from './pages/shop'
import Account from './pages/account'
import Checkout from './pages/checkout'

import './App.css'

function App({ setCurrentUser, currentUser, collectionsArray }) {
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
      addCollectionDocuments(
        'collections',
        collectionsArray.map(({ title, items }) => ({ title, items }))
      )
    })

    return () => {
      unsubscribeFromAuth.current()
    }
  }, [unsubscribeFromAuth, setCurrentUser, collectionsArray])

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
  currentUser: selectCurrentUser,
  collectionsArray: selectShopCollectionsForPreview
})

export default connect(mapStateToProps, { setCurrentUser })(App)
