import React, {Component} from "react"
import NavBar from '../components/NavBar';
import ContentContainer from '../containers/ContentContainer.js';
import LogoutComponent from '../components/LogoutComponent.js'
import UserContainer from './UserContainer.js'
import {
  Routes,
  Route
} from 'react-router-dom';
class HomeContainer extends Component{


  render(){
    let {loggedIn} = this.props
    return(
      <>
    <NavBar />
      <Routes>
        <Route path="/content" element={<ContentContainer />}/>
        <Route path='/logout' element={<LogoutComponent/>}/>
      </Routes>
      <h1>WELCOME BACK!</h1>
      <p>please choose or create a user</p>
      <UserContainer/>
      </>
      )
  }
}


export default (HomeContainer)
