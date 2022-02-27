import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'

const NavBar = (props) => {
  const {currentUser} = props
  console.log("nav bar talking", props)
  return (
    <>
    <div style={{ borderBottom: '2px solid #4d4dff', background:'#ccccff', paddingBottom: '10px', paddingLeft: '10px', paddingTop:'10px' }}>
      <NavLink
        style={{ marginRight: '10px' }}
        to="/home"
      >
        <Button className="nav-button">OBH</Button>
      </NavLink>
      <NavLink
        style={{ marginRight: '10px' }}
        to="/users"
      >
        <Button className="nav-button">Users</Button>
      </NavLink>
      {currentUser? <NavLink
        style={{ marginRight: '10px' }}
        to="/browse"
      >
        <Button className="nav-button">Browse</Button>
      </NavLink> : <></>}
      <NavLink
        style={{ marginRight: '10px' }}
        to="/logout"
      >
        <Button className="nav-button">Logout</Button>
      </NavLink>
      {props.currentUser? <button className="user-name"> Hi {props.currentUser.attributes.name}</button> : <button className="user-name">Please Select A User</button>}
    </div>
    </>
  );
}
const mapStateToProps = state=>{
  return({
    currentUser: state.userReducer.current_user
  })
}

export default connect(mapStateToProps)(NavBar);
