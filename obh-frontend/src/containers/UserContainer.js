import React, {Component} from "react"
import UserCreateForm from '../components/UserCreateForm'
import {currentAccount} from '../actions/fetchAccount'
import {fetchUsers} from '../actions/userActions'
import { connect } from "react-redux";
import UserSelect from "../components/UserSelect.js"
class UserContainer extends Component{
state={
  users:''
}
  componentDidMount(){
    let fetchedUsers = this.props.fetchUsers(this.props.accountId)
  }

  render(){
    console.log("userstate", this.props)
    return(
      <>
      <UserCreateForm/>
      <UserSelect users={this.props.users}/>
      </>
    )
  }
}

const mapStateToProps = state => {
  console.log("Current Account Id:", state.currentAccount.data.id, state)
  return ({
    accountId: state.currentAccount.data.id,
    users: state.userReducer.users
  })
}

const mDTP = (dispatch) => {
  return {
    fetchUsers: (accountId) => dispatch(fetchUsers(accountId))
  }
}
export default connect(mapStateToProps, mDTP)(UserContainer)
