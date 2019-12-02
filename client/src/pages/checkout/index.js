import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {
  selectCartItems,
  selectCartTotalPrice
} from '../../store/ducks/cart/selectors'

import CheckoutItem from '../../components/checkout-item'
import StripeCheckoutButton from '../../components/stripe-checkout-button'

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from './styles'

const Checkout = ({ cartItems, totalPrice }) => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Prie</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map(item => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <TotalContainer>
        <span>Total: ${totalPrice}</span>
      </TotalContainer>
      <WarningContainer>
        *Test Credit Card
        <br />
        4242 4242 4242 4242 - 01/20 - 123
      </WarningContainer>
      <StripeCheckoutButton price={totalPrice} />
    </CheckoutPageContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotalPrice
})

export default connect(mapStateToProps)(Checkout)
