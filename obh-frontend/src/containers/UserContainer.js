import React, {Component} from "react"
import UserCreateForm from '../components/UserCreateForm'
import {fetchUsers} from '../actions/userActions'
import { connect } from "react-redux";
import UserSelect from "../components/UserSelect.js"
class UserContainer extends Component{

  render(){
    console.log("userstate", this.props)
    let{loaded} = this.props
    return( loaded?
      <>
      <h2>Please Create a User Profile</h2>
      <UserCreateForm/>
      </>
      :
      <>
      <h2>Please Select/Or Creare a User Profile</h2>
      <UserSelect/>
      <UserCreateForm/>
      </>
    )
  }
}


export default (UserContainer)
