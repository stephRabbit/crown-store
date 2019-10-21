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
