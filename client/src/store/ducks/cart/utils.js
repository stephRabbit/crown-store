export const addItemToCart = (cartItems, addedItem) => {
  const existingCartItem = cartItems.find(item => addedItem.id === item.id)
  if (existingCartItem) {
    return cartItems.map(item =>
      existingCartItem.id === item.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  }

  return [...cartItems, { ...addedItem, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    item => cartItemToRemove.id === item.id
  )

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(item => item.id !== cartItemToRemove.id)
  }

  return cartItems.map(item =>
    cartItemToRemove.id === item.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  )
}
