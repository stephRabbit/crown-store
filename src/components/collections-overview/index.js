import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectShopCollectionsForPreview } from '../../store/ducks/shop/selectors'

import CollectionPreview from '../collection-preview'

import './collections-overview.scss'

const collectionsOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...rest }) => (
        <CollectionPreview key={id} {...rest} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview
})

export default connect(mapStateToProps)(collectionsOverview)
