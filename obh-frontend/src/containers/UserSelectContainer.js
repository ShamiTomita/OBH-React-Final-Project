import React, {useEffect} from "react"
import UserContainer from './UserContainer.js'
import { useDispatch, useSelector } from "react-redux";
import {fetchUsers} from '../actions/userActions'
import { currentAccount } from "../actions/fetchAccount.js";
const UserSelectContainer = (props) => {

  const account = useSelector(state => state.currentAccount)
  const currentUser = useSelector(state => state.userReducer.currentUser)
  const users = useSelector(state => state.userReducer.users)
  const id = account['data']['id']
  const dispatch = useDispatch()

  useEffect(()=>{
    getUsers()
    console.log(users, parseInt(id))
  }, [])

  const getUsers = () => {
  dispatch(fetchUsers(parseInt(id)))
  }


    /* account: state.currentAccount,
    currentUser: state.userReducer.current_user,
    users: state.userReducer.users */


 
    return(
      <>
      <UserContainer users={users}/>
      </>

      )
  
}
/* const mapStateToProps = state => {
  return({
    account: state.currentAccount,
    currentUser: state.userReducer.current_user,
    users: state.userReducer.users
  })
} */

export default UserSelectContainer
