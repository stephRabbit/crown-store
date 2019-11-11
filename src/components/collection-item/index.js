import React from 'react'
import { connect } from 'react-redux'

import { addItem } from '../../store/ducks/cart/actions'

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './styles'

function CollectionItem({ addItem, item }) {
  const { imageUrl, name, price } = item
  return (
    <CollectionItemContainer>
      <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton inverted onClick={() => addItem(item)}>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  )
}

export default connect(
  null,
  { addItem }
)(CollectionItem)
