import React, { useEffect, lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchCollectionsStart } from '../../store/ducks/shop/actions'

import Spinner from '../../components/spinner'

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/container')
)
const CollectionPageContainer = lazy(() => import('../collection/container'))

function Shop({ match, fetchCollectionsStart }) {
  useEffect(() => {
    fetchCollectionsStart()
  }, [fetchCollectionsStart])

  return (
    <div className='shop-page'>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(Shop)
