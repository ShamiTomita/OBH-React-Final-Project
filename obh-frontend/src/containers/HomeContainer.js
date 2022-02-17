import React, {Component} from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import ContentContainer from './ContentContainer.js';
import SignUpContainer from './SignUpContainer.js';
class HomeContainer extends Component{

  render(){
    console.log("wender", this.state)
    return(

      <Router>
      <NavBar />
        <Routes>
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route path="/content" element={<ContentContainer />}/>
          <Route path="/signup" element={<SignUpContainer />}/>
        </Routes>
      </Router>

    )
  }
}

export default (HomeContainer)
