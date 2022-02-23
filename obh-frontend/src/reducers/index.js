import {combineReducers} from "redux"
import accountReducer from './accountReducer'
import contentReducer from './contentReducer'
import currentAccount from './currentAccount'
import userReducer from './userReducer'
import loginForm from './loginForm'
import currentShow from './currentShow'
import favoriteReducer from './favoriteReducer'
import signupForm from './signupForm'
export default combineReducers({
  accountReducer,
  contentReducer,
  currentAccount,
  userReducer,
  loginForm,
  currentShow,
  favoriteReducer,
  signupForm
})
