import ShopTypes from './types'

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
