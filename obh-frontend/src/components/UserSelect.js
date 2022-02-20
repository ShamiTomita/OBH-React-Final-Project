import React, {Component} from "react"
import {setCurrentUser} from '../actions/userActions'
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
export default (UserSelect)
