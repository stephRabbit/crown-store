import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase'

import { updateCollections } from '../../store/ducks/shop/actions'

import WithSpinner from '../../components/with-spinner'
import CollectionsOverview from '../../components/collections-overview'
import CollectionPage from '../collection'

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

function Shop({ match, updateCollections }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const collectionRef = firestore.collection('collections')

    collectionRef.get().then(snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionMap)
      setLoading(false)
    })
  }, [updateCollections])

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={props => (
          <CollectionPageWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
})

export default connect(null, mapDispatchToProps)(Shop)
