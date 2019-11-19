import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import { selectShopIsCollectionLoaded } from '../../store/ducks/shop/selectors'

import WithSpinner from '../../components/with-spinner'
import CollectionPage from './'

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectShopIsCollectionLoaded(state)
})

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage)

export default CollectionPageContainer
