import React, {Component} from "react"
import LoginComponent from '../components/LoginComponent'
import SignUpComponent from '../components/SignUpComponent'
class HomeContainer extends Component{


  render(){
    console.log(this.props)
    let {loggedIn} = this.props
    return( loggedIn ?
    <div>Welcome Back</div>
    :
    <div>
      <h1>Please Login or SignUp</h1>
      <h3>LOGIN</h3>
      <LoginComponent/>
      <h3>SIGNUP</h3>
      <SignUpComponent/>
    </div>
  )
  }
}


export default (HomeContainer)
