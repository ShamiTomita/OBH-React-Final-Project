import React from 'react'
import { connect } from 'react-redux'
import { logout } from "../actions/fetchAccount.js"
import {resetLoginForm} from "../actions/loginForm.js"
import {useNavigate} from "react-router-dom"
import {clearCurrentUser} from "../actions/userActions"
import {clearCurrentShow} from "../actions/contentActions"
const Logout = ({ logout, clearCurrentUser, resetLoginForm, clearCurrentShow}) => {

  let navigate = useNavigate();
  return (
    <div className="logout">
    <form onSubmit={(event) => {
        event.preventDefault()
        resetLoginForm()
        clearCurrentUser()
        clearCurrentShow()
        logout()
        navigate("/")
      }
    }>
      <input type="submit" value="Log Out"/>
    </form>
    </div>
  )
}

export default connect(null, { logout, resetLoginForm, clearCurrentUser, clearCurrentShow } )(Logout)
