import React from 'react'

import CustomButton from '../custom-button'

import './cart-dropdown.scss'

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-item'></div>
      <CustomButton>Go to Checkout</CustomButton>
    </div>
  )
}

export default CartDropdown
