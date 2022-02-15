import React, {Component} from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import ContentPage from '../components/ContentPage.js'
import { connect } from "react-redux";
import {fetchContent} from "../actions/contentActions.js"
class HomeContainer extends Component{
state = {
  content: []
}

  componentDidMount(){
    console.log("cDM", this.props);
    this.props.fetchContent();
  }

  render(){
    console.log("wender", this.props.media)
    return(

      <Router>
      <NavBar />
        <Routes>
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route path="/content" element={<ContentPage media={this.props.media}/>}/>
        </Routes>
      </Router>

    )
  }
}

const mSTP = (state) => {
  return{
    media: state.content,
    loading: state.loading
  }
}

const mDTP = (dispatch) => {
  return {
    fetchContent: () => dispatch(fetchContent())
  }
}
export default connect(mSTP, mDTP)(HomeContainer)
