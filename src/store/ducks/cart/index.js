import CartTypes from './types'

const initialState = {
  hidden: true
}

function cart(state = initialState, action) {
  switch (action.type) {
    case CartTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    default:
      return state
  }
}

export default cart
