import React, {Component} from "react"
import UserContainer from './UserContainer.js'

import {fetchUsers} from '../actions/userActions'
import { connect } from "react-redux";
class UserSelectContainer extends Component{

  componentDidMount(){

    console.log(this.props)
    let id = this.props.account['data']['id']
    console.log("ID:", id)
    this.props.fetchUsers(parseInt(id))
  }
  render(){
    let {account} = this.props
    console.log(account, this.props.currentUser)

    return(
      <>
      <UserContainer users={this.props.users}/>
      </>

      )
  }
}
const mapStateToProps = state => {
  return({
    account: state.currentAccount,
    currentUser: state.userReducer.current_user,
    users: state.userReducer.users
  })
}

export default connect(mapStateToProps, {fetchUsers})(UserSelectContainer)
