import React, {useState} from "react"
import { connect, useSelector } from "react-redux";
import {fetchAccount} from "../actions/fetchAccount.js"
import { updateLoginForm } from "../actions/loginForm.js"
import {useNavigate} from "react-router-dom"
const LoginComponent = ({loginFormData, updateLoginForm, fetchAccount, history}) => {

  const  handleOnChange = (event) =>{
    const { name, value } = event.target
    const updatedFormInfo = {
      ...loginFormData,
      [name]: value
    }
   updateLoginForm(updatedFormInfo)
 }
  let navigate = useNavigate();

  const handleOnSubmit= (event)=>{
     console.log("HOS", loginFormData)
     event.preventDefault()
     fetchAccount(loginFormData, history)
     navigate("/users")
   }
  const loginFormDataFromState = useSelector(state => state.loginForm)


      return(
          <form onSubmit={handleOnSubmit}>
          <div className="form-group">
            <label>Account Name:</label>
            <input className="form-control" autoComplete='off' type="text" name="username" value={loginFormData.username} onChange={handleOnChange}/><br></br>
            <label>Email:</label>
            <input className="form-control" autoComplete='off' type="text" name="email" value={loginFormData.email}onChange={handleOnChange}/><br></br>
            <label>Password:</label>
            <input className="form-control" autoComplete='off' type="text" name="password"value={loginFormData.password}onChange={handleOnChange}/><br></br>
            <button className="btn btn-primary" type="submit">Submit</button>
          </div>
          </form>
        
      )
    }
    const mapStateToProps = state => {
      return {
        loginFormData: state.loginForm
      }
    }



  export default(connect(mapStateToProps, {updateLoginForm, fetchAccount})(LoginComponent))
