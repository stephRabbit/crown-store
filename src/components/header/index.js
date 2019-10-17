import React from 'react'
import { Link } from 'react-router-dom'

import { auth } from '../../firebase'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import './header.scss'

function Header({ currentUser }) {
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
      </div>
    </div>
  )
}

export default Header
