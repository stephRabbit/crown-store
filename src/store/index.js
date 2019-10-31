import { applyMiddleware, createStore } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'

import reducers from './ducks'

const middleware = [logger]

export const store = createStore(reducers, applyMiddleware(...middleware))

export const persistor = persistStore(store)

export default { store, persistor }
