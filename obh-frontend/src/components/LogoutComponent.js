import React from 'react'
import { connect } from 'react-redux'
import { logout } from "../actions/fetchAccount.js"
import {resetLoginForm} from "../actions/loginForm.js"
import {useNavigate} from "react-router-dom"
import {clearCurrentUser} from "../actions/userActions"
const Logout = ({ logout, clearCurrentUser, resetLoginForm}) => {

  let navigate = useNavigate();
  return (
    <form onSubmit={(event) => {
        event.preventDefault()
        resetLoginForm()
        clearCurrentUser()
        logout()
        navigate("/")
      }
    }>
      <input type="submit" value="Log Out"/>
    </form>
  )
}

export default connect(null, { logout, resetLoginForm, clearCurrentUser } )(Logout)
