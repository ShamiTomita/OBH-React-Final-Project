import React, {Component} from "react"
import SignUpComponent from '../components/SignUpComponent'
import LoginComponent from '../components/LoginComponent'
class SignUpContainer extends Component{

  render(){
    return(
      <div>
      <h1>SIGN UP</h1>
      <SignUpComponent />
      <h1>LOGIN</h1>
      <LoginComponent />
      </div>

    )
  }
}


export default SignUpContainer
