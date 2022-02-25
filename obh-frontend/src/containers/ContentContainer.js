import React, {Component} from "react"
import ContentCarousel from '../components/ContentCarousel'
import ContentPage from '../components/ContentPage.js'
import FavoritesPage from '../components/FavoritesPage.js'
import {fetchFaves} from '../actions/favoriteActions'
import { connect } from "react-redux";
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
    const randomOne = Math.floor(Math.random()*this.props.media.length)
    const randomTwo = Math.floor(Math.random()*this.props.media.length)
    const randomThree = Math.floor(Math.random()*this.props.media.length)
    randomArray.push(this.props.media[randomOne], this.props.media[randomTwo], this.props.media[randomThree])
    console.log("wender", this.state, this.props.media)

    return(
      <div>
          <ContentCarousel media={this.props.media} rC1={randomArray[0]} rC2={randomArray[1]} rC3={randomArray[2]}/>
          <ContentPage media={this.props.media}/>
          {!!this.props.faves ? <FavoritesPage faves={this.props.faves} media={this.props.media}/> : <>hi</>}
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


export default connect(mSTP, {fetchFaves})(ContentContainer)
