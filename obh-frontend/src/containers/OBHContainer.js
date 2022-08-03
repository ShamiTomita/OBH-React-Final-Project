import React, {Component} from "react"
import {connect} from "react-redux"
import {clearCurrentShow} from '../actions/contentActions'
import ContentContainer from '../containers/ContentContainer.js';
import UserSelectContainer from '../containers/UserSelectContainer.js'
import Container from 'react-bootstrap/Container'
class OBHContainer extends Component {

  componentDidMount(){
    this.props.clearCurrentShow()

  }
  render(){
    console.log(this.props)

    return(this.props.currentUser ?
      <>

        <div className="OBH-Content">
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
