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
import SignUpContainer from './containers/SignUpContainer.js';

class App extends Component {
  componentDidMount(){
    this.props.currentAccount()
  }
  render(){
    const {is_logged_in, username} = this.props
  console.log("app", this.props)
  return (
    <>
    <Router>
    <NavBar />
      <Routes>
        <Route exact path="/" element={<HomeContainer/>} />
        <Route path="/content" element={<ContentContainer />}/>
        <Route path="/signup" element={<SignUpContainer />}/>
      </Routes>
    </Router>

    </>
    );
  }
}
const mapStateToProps = state => {
  return ({
    is_LoggedIn: !!state.currentAccount,
  })
}
export default connect(mapStateToProps,{currentAccount})(App)
