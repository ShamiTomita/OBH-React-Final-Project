import React, {Component} from "react"
import {connect} from "react-redux"
import {Route, Routes} from 'react-router-dom'
import NavBar from '../components/NavBar';
import ContentContainer from '../containers/ContentContainer.js';
import LogoutComponent from '../components/LogoutComponent.js'
import UserSelectContainer from './UserSelectContainer'
class OBHContainer extends Component {

  render(){
    console.log(this.props)
    return(
      <>
      <NavBar />
        <Routes>
          <Route path="/content" element={<ContentContainer />}/>
          <Route path='/logout' element={<LogoutComponent/>}/>
        </Routes>

        <div>
          <h1>WELCOME BACK {this.props.currentUser['attributes']['name']}!</h1>
          <h1>Hi</h1>
        </div>
      </>
    )
  }
}


const mapStateToProps = state => {
  return({
    account: state.currentAccount,
    currentUser: state.userReducer.current_user
  })
}

export default connect(mapStateToProps)(OBHContainer)
