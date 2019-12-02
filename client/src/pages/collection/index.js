import React from 'react'
import { connect } from 'react-redux'

import { selectShopCollection } from '../../store/ducks/shop/selectors'

import CollectionItem from '../../components/collection-item'

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './styles'

const Collection = ({ collection }) => {
  const { items, title } = collection
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items &&
          items.map(item => <CollectionItem key={item.id} item={item} />)}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection)
