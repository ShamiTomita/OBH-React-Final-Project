import React, {Component} from "react"
import NavBar from '../components/NavBar';
import ContentContainer from '../containers/ContentContainer.js';
import LogoutComponent from '../components/LogoutComponent.js'
import UserContainer from './UserContainer.js'
import {fetchUsers} from '../actions/userActions'
import { connect } from "react-redux";
import {Route, Routes} from 'react-router-dom'
class HomeContainer extends Component{

  componentDidMount(){
    console.log(this.props)
    let id = this.props.account['data']['id']
    console.log("ID:", id)
    this.props.fetchUsers(parseInt(id))
  }
  render(){
    let {loggedIn, account} = this.props
    console.log(account, this.props)
    return( !loggedIn?
      <></>
      :
      <>
    <NavBar />
      <Routes>
        <Route exact path="/" />
        <Route exact path="/content" element={<ContentContainer />}/>
        <Route exact path='/logout' element={<LogoutComponent/>}/>
      </Routes>

      <h1>WELCOME BACK {this.props.account['data']['attributes']['username']}!</h1>
      <UserContainer />
      </>

      )
  }
}


export default connect(null, {fetchUsers})(HomeContainer)
