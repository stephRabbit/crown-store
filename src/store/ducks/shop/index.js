import ShopTypes from './types'
// import SHOP_DATA from './data'
const INITIAL_STATE = {
  collections: {}
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
