import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {
  selectCartItems,
  selectCartTotalPrice
} from '../../store/ducks/cart/selectors'

import CheckoutItem from '../../components/checkout-item'
import StripeCheckoutButton from '../../components/stripe-checkout-button'

import './checkout.scss'

const Checkout = ({ cartItems, totalPrice }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Prie</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(item => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <div className='total'>
        <span>Total: ${totalPrice}</span>
      </div>
      <div className='test-warning'>
        *Test Credit Card
        <br />
        4242 4242 4242 4242 - 01/20 - 123
      </div>
      <StripeCheckoutButton price={totalPrice} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotalPrice
})

export default connect(mapStateToProps)(Checkout)
