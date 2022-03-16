import React, {Component} from "react"
import ContentCarousel from '../components/Content/ContentCarousel'
import ContentPage from '../components/Content/ContentPage.js'
import FavoritesPage from '../components/Content/FavoritesPage.js'
import {fetchFaves} from '../actions/favoriteActions'
import {setCurrentShow, clearCurrentShow} from '../actions/contentActions'
import { connect } from "react-redux";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BrowseContainer from './BrowseContainer'
class ContentContainer extends Component{
state = {
  content: [],


}

  componentDidMount(){
    console.log("cDM", this.props);
    this.props.fetchFaves(this.props.currentUserId)
  }

  render(){

    let randomArray = []
    let randomOne = Math.floor(Math.random()*this.props.media.length)
    let randomTwo = Math.floor(Math.random()*this.props.media.length)
    let randomThree = Math.floor(Math.random()*this.props.media.length)
    if (randomOne !== randomTwo && randomTwo !== randomThree){
      randomArray.push(this.props.media[randomOne], this.props.media[randomTwo], this.props.media[randomThree])
    }else{
      randomArray.push(this.props.media[0], this.props.media[2], this.props.media[4])
    }
    console.log("wender", this.state, this.props.media)

    return(
      <div>
      <Container>
        <Row>
        <Col>
          <ContentCarousel setCurrentShow={this.props.setCurrentShow} clearCurrentShow={this.props.clearCurrentShow} media={this.props.media} rC1={randomArray[0]} rC2={randomArray[1]} rC3={randomArray[2]}/>
        </Col>
        </Row>
        </Container>
          <ContentPage className="content-page" setCurrentShow={this.props.setCurrentShow} clearCurrentShow={this.props.clearCurrentShow} media={this.props.media}/>

          {!!this.props.faves.length > 1 ? <FavoritesPage setCurrentShow={this.props.setCurrentShow} clearCurrentShow={this.props.clearCurrentShow} faves={this.props.faves} media={this.props.media}/> : <></>}
          <BrowseContainer/>
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


export default connect(mSTP, {fetchFaves, setCurrentShow, clearCurrentShow})(ContentContainer)
