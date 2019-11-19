import ShopTypes from './types'
import { firestore, convertCollectionsSnapshotToMap } from '../../../firebase'

export const fetchCollectionsStart = () => ({
  type: ShopTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collectionMap => ({
  type: ShopTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap
})

export const fetchCollectionsError = errorMessage => ({
  type: ShopTypes.FETCH_COLLECTIONS_FAIL,
  payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections')
    dispatch(fetchCollectionsStart())

    collectionRef
      .get()
      .then(snapshot => {
        const collectionMap = convertCollectionsSnapshotToMap(snapshot)
        dispatch(fetchCollectionsSuccess(collectionMap))
      })
      .catch(err => dispatch(fetchCollectionsError(err.message)))
  }
}
