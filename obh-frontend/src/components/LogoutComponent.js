import React from 'react'
import { connect } from 'react-redux'
import { logout } from "../actions/fetchAccount.js"
import {resetLoginForm} from "../actions/loginForm.js"
import {useNavigate} from "react-router-dom"

const Logout = ({ logout}) => {

  let navigate = useNavigate();
  return (
    <form onSubmit={(event) => {
        event.preventDefault()
        resetLoginForm()
        logout()
        navigate("/")
      }
    }>
      <input type="submit" value="Log Out"/>
    </form>
  )
}

export default connect(null, { logout, resetLoginForm } )(Logout)
