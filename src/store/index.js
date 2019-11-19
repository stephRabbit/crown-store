import { applyMiddleware, createStore } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducers from './ducks'

const middlewares = [thunk]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

export const store = createStore(reducers, applyMiddleware(...middlewares))

export const persistor = persistStore(store)

export default { store, persistor }
