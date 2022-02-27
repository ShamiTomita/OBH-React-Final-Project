import React, {useEffect} from "react"
import {setCurrentUser,  clearCurrentUser, deleteUser} from '../actions/userActions'
import {fetchFaves} from '../actions/favoriteActions'
import {connect} from "react-redux"
import {useNavigate} from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import DeleteUser from './DeleteUser'

const UserSelect =(props)=> {
console.log(props.users)
let navigate = useNavigate();


const handleClick = (event) =>{
event.preventDefault()

console.log("im clicked", props, event.target.value)
  let id = event.target.value
  let clickedUser = props.users.find(user => user.id === id)
  if (!!props.currentUser){
    clearCurrentUser()
  }
  props.setCurrentUser(clickedUser)
  props.fetchFaves(id)
  navigate("/home")
}


    return(
      <Container>
      {props.users.map((user) => (
        <>
        <Button className="user-button" onClick={handleClick} value={user.id} key={user.id}> {user.attributes.name} </Button><DeleteUser currentUser={props.currentUser} userId={user.id}clearCurrentUser={props.clearCurrentUser} deleteUser={props.deleteUser}/>
        <br></br>
        </>
      ))}
      </Container>

    )
  }

const mapStateToProps = state => {
  return({
    users: state.userReducer.users,
    loaded: state.userReducer.loaded,
    currentUser: state.userReducer.current_user,
    users: state.userReducer.users
  })
}



export default connect(mapStateToProps, {setCurrentUser, fetchFaves, clearCurrentUser, deleteUser})(UserSelect)
