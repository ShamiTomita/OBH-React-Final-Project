import React from "react"
import {setCurrentUser} from '../actions/userActions'
import {connect} from "react-redux"

const UserSelect =(props)=> {
console.log(props.users)

const handleClick = (event) =>{
event.preventDefault()
console.log("im clicked", props, event.target.value)
  let id = event.target.value
  let clickedUser = props.users.find(user => user.id === id)
  props.setCurrentUser(clickedUser)
}

    return(!props.loaded?
      <div></div>
      :
      <>
      {props.users.map((user) => (<button onClick={handleClick} value={user.id} key={user.id}> {user.attributes.name} </button>))}
      </>

    )
  }

const mapStateToProps = state => {
  return({
    users: state.userReducer.users,
    loaded: state.userReducer.loaded
  })
}



export default connect(mapStateToProps, {setCurrentUser})(UserSelect)
