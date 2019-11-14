import React, { useEffect, useRef } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase'

import { updateCollections } from '../../store/ducks/shop/actions'

import CollectionsOverview from '../../components/collections-overview'
import CollectionPage from '../collection'

function Shop({ match, updateCollections }) {
  const unsubscribeSnapShot = useRef(null)
  useEffect(() => {
    const collectionRef = firestore.collection('collections')
    unsubscribeSnapShot.current = collectionRef.onSnapshot(async snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionMap)
    })
    return () => {
      unsubscribeSnapShot.current()
    }
  }, [updateCollections])

  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
})

export default connect(null, mapDispatchToProps)(Shop)
