import React from 'react'
import { connect } from 'react-redux'

import {
  clearCartItem,
  addItem,
  removeItem
} from '../../store/ducks/cart/actions'

import './checkout-item.scss'

const CheckoutItem = ({ item, addItem, removeItem, clearCartItem }) => {
  const { imageUrl, name, quantity, price } = item
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(item)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => clearCartItem(item)}>
        &#10005;
      </div>
    </div>
  )
}

export default connect(
  null,
  { clearCartItem, addItem, removeItem }
)(CheckoutItem)
