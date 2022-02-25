import React, {Component} from "react"
import {connect} from "react-redux"
import {clearCurrentShow} from '../actions/contentActions'
import ContentContainer from '../containers/ContentContainer.js';
import UserSelectContainer from '../containers/UserSelectContainer.js'
class OBHContainer extends Component {

  componentDidMount(){
    this.props.clearCurrentShow()

  }
  render(){
    console.log(this.props)

    return(this.props.currentUser ?
      <>
        <div>
          <h3>search</h3>
        </div>
        <div>
          <h1>{this.props.currentUser['attributes']['name']}!</h1>
          <ContentContainer/>
        </div>
      </>
      :
      <>
      <UserSelectContainer/ >
      </>
    )
  }
}

const mapStateToProps = state => {
  return({
    account: state.currentAccount,
    currentUser: state.userReducer.current_user,
    
  })
}

export default connect(mapStateToProps, {clearCurrentShow})(OBHContainer)
