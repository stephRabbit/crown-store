import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartHidden } from '../../store/ducks/cart/selectors'
import { selectCurrentUser } from '../../store/ducks/user/selectors'

import { auth } from '../../firebase'
import CartIcon from '../cart-icon'
import CartDropdown from '../cart-dropdown'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionButton,
  OptionLink
} from './styles'

function Header({ currentUser, hidden }) {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>Shop</OptionLink>
        <OptionLink to='/contact'>Contact</OptionLink>
        {currentUser ? (
          <OptionButton onClick={() => auth.signOut()}>Sign out</OptionButton>
        ) : (
          <OptionLink to='/signin'>Sign In</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!hidden && <CartDropdown />}
    </HeaderContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
