import React, {Component, useEffect} from "react"
import {connect, useDispatch, useSelector} from "react-redux"
import {clearCurrentShow} from '../actions/contentActions'
import ContentContainer from '../containers/ContentContainer.js';
import UserSelectContainer from '../containers/UserSelectContainer.js'
import Container from 'react-bootstrap/Container'
const OBHContainer = (props) => {

  const dispatch = useDispatch()
 useEffect(() => {
  dispatch(clearCurrentShow())
 }, [])

 const currentUser = useSelector(state => state.userReducer.current_user)
  
    console.log(currentUser)

    return(currentUser ?
      <>

        <div className="OBH-Content">
          <ContentContainer/>
        </div>
  
      </>
      :
      <>
      <UserSelectContainer/>
      </>
    )
  }

/* const mapStateToProps = state => {
  return({
    account: state.currentAccount,
    currentUser: state.userReducer.current_user,

  })
} */

export default OBHContainer
