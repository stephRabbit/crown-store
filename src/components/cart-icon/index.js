import React from 'react'
import { connect } from 'react-redux'

import { toggleCartHidden } from '../../store/ducks/cart/actions'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.scss'

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}

export default connect(
  null,
  { toggleCartHidden }
)(CartIcon)
