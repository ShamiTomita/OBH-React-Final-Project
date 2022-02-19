import React, {Component} from "react"
import SignUpComponent from '../components/SignUpComponent'
import LoginComponent from '../components/LoginComponent'
class SignUpContainer extends Component{


  render(){
    console.log(this.props)
    return(
      <div>
      <h1>SIGN UP</h1>
      <SignUpComponent />
      </div>

    )
  }
}


export default SignUpContainer
