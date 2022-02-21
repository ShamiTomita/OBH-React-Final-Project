import {combineReducers} from "redux"
import accountReducer from './accountReducer'
import contentReducer from './contentReducer'
import currentAccount from './currentAccount'
import userReducer from './userReducer'
import loginForm from './loginForm'
export default combineReducers({
  accountReducer,
  contentReducer,
  currentAccount,
  userReducer,
  loginForm
})
