import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { toggleCartHidden } from '../../store/ducks/cart/actions'
import { selectCartItemsCount } from '../../store/ducks/cart/selectors'

import { CartContainer, ShoppingIcon, ItemCountContainer } from './styles'

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartContainer onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCountContainer className='item-count'>
        {itemCount}
      </ItemCountContainer>
    </CartContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

export default connect(
  mapStateToProps,
  { toggleCartHidden }
)(CartIcon)
