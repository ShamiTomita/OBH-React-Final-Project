import React from 'react'
import { connect } from 'react-redux'
import { logout } from "../actions/fetchAccount.js"
import {resetLoginForm} from "../actions/loginForm.js"


const Logout = ({ logout}) => {
  return (
    <form onSubmit={(event) => {
        event.preventDefault()
        resetLoginForm()
        logout()
      }
    }>
      <input type="submit" value="Log Out"/>
    </form>
  )
}

export default connect(null, { logout, resetLoginForm } )(Logout)
