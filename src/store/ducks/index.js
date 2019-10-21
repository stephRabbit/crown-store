import { combineReducers } from 'redux'

import user from './user'
import cart from './cart'

const store = combineReducers({
  user,
  cart
})

export default store
