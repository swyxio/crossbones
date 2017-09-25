import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  nav: require('./nav').reducer,
})

export default rootReducer
