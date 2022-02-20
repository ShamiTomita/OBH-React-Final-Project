import React, {Component} from "react"
import './App.css';
import HomeContainer from './containers/HomeContainer.js'
import {connect} from 'react-redux'
import {currentAccount} from './actions/fetchAccount.js'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import ContentContainer from './containers/ContentContainer.js';
import LogoutComponent from './components/LogoutComponent.js'

class App extends Component {
  componentDidMount(){
    this.props.currentAccount()
  }
  render(){
    const {is_LoggedIn, account} = this.props
  console.log("app", this.props)
  return (
    <>
    <Router>
    <NavBar />
      <Routes>
        <Route exact path="/" element={<HomeContainer loggedIn={this.props.is_LoggedIn}/>} />
        <Route path="/content" element={<ContentContainer />}/>
        <Route path='/logout' element={<LogoutComponent/>}/>
      </Routes>
    </Router>

    </>
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
