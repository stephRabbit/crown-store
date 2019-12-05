import React, { useEffect, lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCurrentUser } from './store/ducks/user/selectors'
import { checkUserSession } from './store/ducks/user/actions'

import Header from './components/header'
import Spinner from './components/spinner'
import ErrorBoundary from './components/error-boundary'

import { GlobalStyle } from './global.styles'

const HomePage = lazy(() => import('./pages/homepage'))
const Shop = lazy(() => import('./pages/shop'))
const Account = lazy(() => import('./pages/account'))
const Checkout = lazy(() => import('./pages/checkout'))

function App({ currentUser, checkUserSession }) {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={Shop} />
            <Route exact path='/checkout' component={Checkout} />
            <Route
              exact
              path='/signin'
              render={() => (currentUser ? <Redirect to='/' /> : <Account />)}
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
