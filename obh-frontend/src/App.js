import React, {Component} from "react"
import './App.css';
import SigninContainer from './containers/SigninContainer.js'
import HomeContainer from './containers/HomeContainer.js'
class App extends Component {
  render(){
  return (
    <div className="App">
      <SigninContainer />
      <HomeContainer />
    </div>
    );
  }
}

export default App;
