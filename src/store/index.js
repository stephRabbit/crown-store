import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'

import reducers from './ducks'

const middleware = [logger]

const store = createStore(reducers, applyMiddleware(...middleware))

export default store
