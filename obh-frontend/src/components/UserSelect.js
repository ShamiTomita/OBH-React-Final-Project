import React from "react"
//import {setCurrentUser} from '../actions/userActions'
import {connect} from "react-redux"

const UserSelect =(props)=> {
console.log(props.users.users)


    return(!props.loaded?
      <div></div>
      :
      <>
      {props.users.map(user=> <div key={user.id}>Name: {user.attributes.name}</div>)}
      </>

    )
  }

const mapStateToProps = state => {
  return({
    users: state.userReducer.users,
    loaded: state.userReducer.loaded
  })
}

export default connect(mapStateToProps)(UserSelect)
