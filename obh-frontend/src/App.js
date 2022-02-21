import React, {Component} from "react"
import './App.css';
import HomeContainer from './containers/HomeContainer.js'
import {connect} from 'react-redux'
import {currentAccount} from './actions/fetchAccount.js'
import LoginComponent from './components/LoginComponent'
import SignUpComponent from './components/SignUpComponent'
import {Route, Routes} from 'react-router-dom'
class App extends Component {
  componentDidMount(){
    console.log(this.props)
    this.props.currentAccount()
  }

  render(){
    const {is_LoggedIn, account} = this.props
  console.log("app", this.props)
  return( is_LoggedIn ?
    <>
    <Routes>
      <Route exact path="*" element={<HomeContainer loggedIn={this.props.is_LoggedIn} account={account}/>}/>
    </Routes>
    </>
    :
    <div>
      <h1>Please Login or SignUp</h1>
      <h3>LOGIN</h3>
      <LoginComponent/>
      <h3>SIGNUP</h3>
      <SignUpComponent/>
    </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("State", state)
  return ({
    is_LoggedIn: !!state.currentAccount,
    account: state.currentAccount
  })
}
export default connect(mapStateToProps,{currentAccount})(App)
