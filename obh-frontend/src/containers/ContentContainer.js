import React, {Component} from "react"

import ContentPage from '../components/ContentPage.js'
import { connect } from "react-redux";
import {fetchContent} from "../actions/contentActions.js"
class ContentContainer extends Component{
state = {
  content: []
}

  componentDidMount(){
    console.log("cDM", this.props);
    this.props.fetchContent();
  }

  render(){
    console.log("wender", this.state)
    return(
      <div>
          <ContentPage media={this.props.media}/>
      </div>
    )
  }
}

const mSTP = (state) => {
  return{
    media: state.contentReducer.content,
    loading: state.contentReducer.loading
  }
}

const mDTP = (dispatch) => {
  return {
    fetchContent: () => dispatch(fetchContent())
  }
}
export default connect(mSTP, mDTP)(ContentContainer)
