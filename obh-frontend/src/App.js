import React, {Component} from "react"
import './App.css';
import UserSelectContainer from './containers/UserSelectContainer.js'
import {connect} from 'react-redux'
import {currentAccount} from './actions/fetchAccount.js'
import {fetchContent} from "./actions/contentActions.js"
import LoginComponent from './components/LoginComponent'
import SignUpComponent from './components/SignUpComponent'
import OBHContainer from './containers/OBHContainer'
import {Route, Routes} from 'react-router-dom'
import ShowPage from './components/ShowPage'
import LogoutComponent from './components/LogoutComponent.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavBar from './components/NavBar';

class App extends Component {
  componentDidMount(){
    console.log(this.props)
    this.props.currentAccount()
    this.props.fetchContent()
  }

  render(){
    const {is_LoggedIn, account, currentShow} = this.props
  console.log("app", this.props)

    const show = currentShow
  return( is_LoggedIn ?
    <>
    <NavBar />
      <Routes>
        {currentShow? <Route path={`/show/${show.id}`} element={<ShowPage show={currentShow}/>}/> : <></>}
        <Route path='/home' element={<OBHContainer/>}/>
        <Route path='/logout' element={<LogoutComponent/>}/>
        <Route path='/users' element={<UserSelectContainer loggedIn={this.props.is_LoggedIn} account={account}/>}/>
      </Routes>


    </>
    :
    <div>
      <Container>
      <Row>
      <Col>
      <h1>Please Login or SignUp</h1>
      <h3>LOGIN</h3>
      <br></br>
      <LoginComponent/>
      <br></br>
      </Col>
      </Row>
      <Row>
      <Col>
      <h3>SIGNUP</h3>
      <br></br>
      <SignUpComponent/>
      <br></br>
      </Col>
      </Row>
      </Container>
    </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("State", state)
  return ({
    is_LoggedIn: !!state.currentAccount,
    account: state.currentAccount,
    currentShow: state.currentShow,
    currentUser: state.userReducer.currentUser
  })
}
export default connect(mapStateToProps,{currentAccount, fetchContent})(App)
