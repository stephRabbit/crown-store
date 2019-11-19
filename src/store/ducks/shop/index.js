import ShopTypes from './types'

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
}

function shop(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ShopTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      }
    case ShopTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      }
    case ShopTypes.FETCH_COLLECTIONS_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return state
  }
}

export default shop
