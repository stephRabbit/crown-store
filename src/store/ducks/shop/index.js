import ShopTypes from './types'

const INITIAL_STATE = {
  collections: null
}

function shop(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ShopTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      }
    default:
      return state
  }
}

export default shop
