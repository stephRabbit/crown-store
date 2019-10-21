import CartTypes from './types'

const initialState = {
  hidden: true,
  cartItems: []
}

function cart(state = initialState, action) {
  switch (action.type) {
    case CartTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case CartTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      }
    default:
      return state
  }
}

export default cart
