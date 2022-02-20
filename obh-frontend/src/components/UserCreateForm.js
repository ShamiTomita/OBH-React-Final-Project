import React, {Component} from "react"
import { connect } from "react-redux";
import {addUser} from "../actions/userActions.js"
class UserCreateForm extends Component {

state ={
  name:'',
}
  handleOnChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }
 handleOnSubmit= (event)=>{
   console.log("HOS",this.props.accountId)
   event.preventDefault()
   this.props.addUser({
    name: this.state.name,
    account_id: parseInt(this.props.accountId)})

   this.setState({
     name:'',
   })
 }

  render(){
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>User Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange} required="required"/><br></br>
          <input type="hidden" name="account_id" value={this.state.accountId} onChange={this.handleOnChange} />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}
const mapStateToProps = state => {
  console.log("Current Account Id:", state.currentAccount.data.id)
  return ({
    accountId: state.currentAccount.data.id
  })
}

export default connect(mapStateToProps, {addUser})(UserCreateForm)
