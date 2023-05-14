import React from "react"
import { connect } from "react-redux";
import {addAccount} from "../actions/fetchAccount.js"
import { updateSignupForm } from "../actions/signupForm.js"
import {useNavigate} from "react-router-dom"
const SignUpComponent = ({ signupFormData, updateSignupForm, addAccount}) => {

const  handleOnChange = (event) =>{
  const { name, value } = event.target
  const updatedFormInfo = {
    ...signupFormData,
    [name]: value
  }
 updateSignupForm(updatedFormInfo)
}

let navigate = useNavigate();

const handleOnSubmit= (event)=>{
   console.log("HOS", signupFormData)
   event.preventDefault()
   addAccount(signupFormData)
   navigate("/users")
 }

    return(
      
        <form onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label>Account Name:</label>
          <input className="form-control" type="text" autoComplete='off' name="username" value={signupFormData.username} onChange={handleOnChange}/><br></br>
          <label>Email:</label>
          <input  className="form-control"type="text" autoComplete='off' name="email" value={signupFormData.email} onChange={handleOnChange}/><br></br>
          <label>Password:</label>
          <input  className="form-control"type="text" autoComplete='off' name="password"value={signupFormData.password} onChange={handleOnChange}/><br></br>
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
        </form>
    )
  }

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, {updateSignupForm, addAccount})(SignUpComponent)
