import React from "react"
import { connect } from "react-redux";
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
     navigate("/")
   }


      return(
        <div>
          <form onSubmit={handleOnSubmit}>
            <label>Account Name:</label>
            <input type="text" name="username" value={loginFormData.username} onChange={handleOnChange}/><br></br>
            <label>Email:</label>
            <input type="text" name="email" value={loginFormData.email}onChange={handleOnChange}/><br></br>
            <label>Password:</label>
            <input type="text" name="password"value={loginFormData.password}onChange={handleOnChange}/><br></br>
            <input type="submit"/>
          </form>
        </div>
      )
    }
    const mapStateToProps = state => {
      return {
        loginFormData: state.loginForm
      }
    }



  export default(connect(mapStateToProps, {updateLoginForm, fetchAccount})(LoginComponent))
