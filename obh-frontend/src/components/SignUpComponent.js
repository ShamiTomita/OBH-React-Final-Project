import React, {Component} from "react"
import { connect } from "react-redux";
import {addAccount} from "../actions/account.js"
class SignUpComponent extends Component {

state ={
  username:'',
  email:'',
  password:''
}
  handleOnChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }
 handleOnSubmit= (event)=>{
   console.log("HOS",this.state)
   event.preventDefault()
   this.props.addAccount(this.state)
   this.setState({
     username:'',
     email: '',
    password:''
   })
 }

  render(){
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Account Name:</label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleOnChange}/><br></br>
          <label>Email:</label>
          <input type="text" name="email" value={this.state.email}onChange={this.handleOnChange}/><br></br>
          <label>Password:</label>
          <input type="text" name="password"value={this.state.password}onChange={this.handleOnChange}/><br></br>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}


export default connect(null, {addAccount})(SignUpComponent)
