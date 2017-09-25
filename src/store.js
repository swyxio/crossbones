import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
// import {createLogger} from 'redux-logger'
import { autoRehydrate } from 'redux-persist'
import thunkMiddleware from 'redux-thunk'
import RehydrationServices from './reducers/ReduxPersist/RehydrationServices'
import ReduxPersistConfig from './reducers/ReduxPersist/config'

import {whoami} from './reducers/auth'

const middleware = []
const enhancers = []

/* ------------- Redux Configuration ------------- */
middleware.push(thunkMiddleware)
// middleware.push(createLogger({collapsed: true}))
/* ------------- Assemble Middleware ------------- */
enhancers.push(applyMiddleware(...middleware))
/* ------------- AutoRehydrate Enhancer ------------- */

// add the autoRehydrate enhancer
if (ReduxPersistConfig.active) {
  enhancers.push(autoRehydrate())
}

/* ------------- Create Store! ------------- */

const store = createStore(rootReducer, compose(...enhancers))

// configure persistStore and check reducer version number
if (ReduxPersistConfig.active) {
  RehydrationServices.updateReducers(store)
}

export default store

// Set the auth info at start
store.dispatch(whoami())
