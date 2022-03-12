// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import post from './post'

const rootReducer = combineReducers({
  auth,
  navbar,
  layout,
  post
})

export default rootReducer
