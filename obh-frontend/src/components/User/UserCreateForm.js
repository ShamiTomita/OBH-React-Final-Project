import React, {Component} from "react"
import { connect } from "react-redux";
import {addUser} from "../../actions/userActions.js"
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
   console.log("HOS",this.props.accountId, this.state.name)
   event.preventDefault()
   this.props.addUser({
    name: this.state.name,
    account_id: this.props.accountId})

   this.setState({
     name:'',
   })
 }

  render(){
    console.log(this.props)
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>User Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange} required="required"/><br></br>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    accountId: state.currentAccount['data']['id']
  })
}

export default connect(mapStateToProps, {addUser})(UserCreateForm)
