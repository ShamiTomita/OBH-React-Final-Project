import React, {Component} from "react"
//import {setCurrentUser} from '../actions/userActions'
import {connect} from "react-redux"
class UserSelect extends Component{

  render(){
   const profiles = this.props.users.map((user)=>{
    return <div key={user.id}>Name: {user.attributes.name}</div>
  })
    console.log("userselect",this.props)
    return(
      <>
      {profiles}
      </>
    )
  }

}
const mapStateToProps = state => {
  return({
    users: state.userReducer.users
  })
}

export default connect(mapStateToProps)(UserSelect)
