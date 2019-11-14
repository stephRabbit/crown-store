import ShopTypes from './types'

export const updateCollections = collectionsMap => ({
  type: ShopTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap
})
