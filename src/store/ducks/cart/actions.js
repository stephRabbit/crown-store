import CartTypes from './types'

export const toggleCartHidden = () => ({
  type: CartTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
  type: CartTypes.ADD_ITEM,
  payload: item
})

export const removeItem = item => ({
  type: CartTypes.REMOVE_ITEM,
  payload: item
})

export const clearCartItem = item => ({
  type: CartTypes.CLEAR_CART_ITEM,
  payload: item
})
