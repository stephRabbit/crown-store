import React from 'react'
import { connect } from 'react-redux'

import { addItem } from '../../store/ducks/cart/actions'
import CustomButton from '../custom-button'

import './collection-item.scss'

function CollectionItem({ addItem, item }) {
  const { imageUrl, name, price } = item
  return (
    <div className='collection-item'>
      <div style={{ backgroundImage: `url(${imageUrl})` }} className='image' />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to cart
      </CustomButton>
    </div>
  )
}

export default connect(
  null,
  { addItem }
)(CollectionItem)
