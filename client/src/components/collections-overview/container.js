import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { selectShopIsCollectionFetching } from '../../store/ducks/shop/selectors'

import WithSpinner from '../with-spinner'
import CollectionsOverview from '../collections-overview'

const mapStateToProps = createStructuredSelector({
  isLoading: selectShopIsCollectionFetching
})

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer
