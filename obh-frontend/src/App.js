import React, {Component} from "react"
import './App.css';
import UserSelectContainer from './containers/UserSelectContainer.js'
import {connect} from 'react-redux'
import {currentAccount} from './actions/fetchAccount.js'
import {fetchContent} from "./actions/contentActions.js"
import LoginComponent from './components/LoginComponent'
import SignUpComponent from './components/SignUpComponent'
import OBHContainer from './containers/OBHContainer'
class App extends Component {
  componentDidMount(){
    console.log(this.props)
    this.props.currentAccount()
    this.props.fetchContent()
  }

  render(){
    const {is_LoggedIn, account} = this.props
  console.log("app", this.props)
  return( is_LoggedIn ?
    <>

    <UserSelectContainer loggedIn={this.props.is_LoggedIn} account={account}/>

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
export default connect(mapStateToProps,{currentAccount, fetchContent})(App)
