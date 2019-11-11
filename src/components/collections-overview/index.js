import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectShopCollectionsForPreview } from '../../store/ducks/shop/selectors'

import CollectionPreview from '../collection-preview'

import { CollectionOverviewContainer } from './styles'

const collectionsOverview = ({ collections }) => {
  return (
    <CollectionOverviewContainer>
      {collections.map(({ id, ...rest }) => (
        <CollectionPreview key={id} {...rest} />
      ))}
    </CollectionOverviewContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview
})

export default connect(mapStateToProps)(collectionsOverview)
