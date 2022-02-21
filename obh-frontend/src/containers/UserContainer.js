import React, {Component} from "react"
import UserCreateForm from '../components/UserCreateForm'
import {fetchUsers} from '../actions/userActions'
import { connect } from "react-redux";
import UserSelect from "../components/UserSelect.js"
class UserContainer extends Component{
state = {
  users: []
}
componentDidMount(){
  console.log("cDM", this.props);
}


  render(){
    console.log("userstate", this.props)
    let{loaded} = this.props
    return( loaded?
      <>
      <UserCreateForm/>
      </>
      :
      <>
      <UserSelect/>
      <UserCreateForm/>
      </>
    )
  }
}


export default (UserContainer)
