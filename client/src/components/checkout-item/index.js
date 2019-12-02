import React from 'react'
import { connect } from 'react-redux'

import {
  clearCartItem,
  addItem,
  removeItem
} from '../../store/ducks/cart/actions'

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './styles'

const CheckoutItem = ({ item, addItem, removeItem, clearCartItem }) => {
  const { imageUrl, name, quantity, price } = item
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div className='arrow' onClick={() => removeItem(item)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(item)}>
          &#10095;
        </div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearCartItem(item)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  )
}

export default connect(
  null,
  { clearCartItem, addItem, removeItem }
)(CheckoutItem)
