import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartHidden } from '../../store/ducks/cart/selectors'
import { selectCurrentUser } from '../../store/ducks/user/selectors'

import { auth } from '../../firebase'
import CartIcon from '../cart-icon'
import CartDropdown from '../cart-dropdown'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import './header.scss'

function Header({ currentUser, hidden }) {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          Shop
        </Link>
        <Link className='option' to='/contact'>
          Contact
        </Link>
        {currentUser ? (
          <button className='option' onClick={() => auth.signOut()}>
            Sign out
          </button>
        ) : (
          <Link className='option' to='/signin'>
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropdown />}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
