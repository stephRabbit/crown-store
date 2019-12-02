import { createSelector } from 'reselect'

const selectCart = state => state.cart

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, val) => acc + val.quantity, 0)
)

export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, val) => acc + val.quantity * val.price, 0)
)
