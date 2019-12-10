import React from 'react'

import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer
} from './styles'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={name} />
      <ItemDetailsContainer>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  )
}

export default React.memo(CartItem)
