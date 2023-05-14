import React, {useState} from "react"
import LoginComponent from '../components/LoginComponent'
import SignUpComponent from "../components/SignUpComponent"
const LoginAndSignupContainer = (props)  =>  {

const [loginToggle, setLoginToggle] = useState(false)
const [signupToggle, setSignupToggle] = useState(false)

const handleLoginToggle = (e) => {
  e.preventDefault();
  if(signupToggle) {
    setSignupToggle(false)
  }
  setLoginToggle(true)
}
  const handleSignupToggle = (e) => {
    e.preventDefault();
    if (loginToggle) {
      setLoginToggle(false)
    }
    setSignupToggle(true)
  }

    return(
      <div className="container d-flex justify-content-center">
        <div className="row">
          <h1>Please Login or Sign Up</h1>
          <div className="col">
              {loginToggle ? <LoginComponent /> : <button onClick={(e) => handleLoginToggle(e)} className="btn btn-primary">Login</button>}
          </div>
          <div className="col">
            {signupToggle ? <SignUpComponent /> : <button onClick={(e) => handleSignupToggle(e)}  className="btn btn-primary">Signup</button>}
          </div>
        </div>
      </div>

    )
}


export default  LoginAndSignupContainer
