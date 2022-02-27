import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchFaves} from '../actions/favoriteActions'
import {setCurrentShow, clearCurrentShow} from '../actions/contentActions'
class BrowseContainer extends Component {

  componentDidMount(){
    console.log(this.props.media)
    
  }
  render(){
    console.log(this.props)

    return(
      <div>
      hi
      </div>
    )
  }
}

const mSTP = (state) => {
  return{
    media: state.contentReducer.content,
    loading: state.contentReducer.loading,
    currentUserId: state.userReducer.current_user['id'],
    faves: state.favoriteReducer.favorites
  }
}
export default connect(mSTP, {fetchFaves, setCurrentShow, clearCurrentShow})(BrowseContainer)
