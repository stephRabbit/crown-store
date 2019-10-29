import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import { toggleCartHidden } from '../../store/ducks/cart/actions'
import { selectCartItems } from '../../store/ducks/cart/selectors'

import CustomButton from '../custom-button'
import CartItem from '../cart-item'

import './cart-dropdown.scss'

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
  const goToCart = () => {
    history.push('/checkout')
    toggleCartHidden()
  }

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className='empty-message'>Your cart is empty!</span>
        )}
      </div>
      <CustomButton inverted onClick={goToCart}>
        Go to Checkout
      </CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(
  connect(
    mapStateToProps,
    { toggleCartHidden }
  )(CartDropdown)
)
