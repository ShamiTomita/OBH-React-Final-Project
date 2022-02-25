import React, { useState, useEffect } from 'react';
import BackButton from "./BackButton"
import FavoriteButton from './FavoriteButton'
import UnfavoriteButton from './UnfavoriteButton'
import {connect} from 'react-redux'
import {addFave, deleteFave, setCurrentFave} from '../actions/favoriteActions'
const ShowPage = (props) => {

  console.log(props.faves)
  let matchId = null
  useEffect(()=>{
    console.log("mamma mia")
      if (props.faves){
      console.log("thats a spicy meatball")
      matchId = props.faves.find(fave => fave.attributes.content_id === parseInt(props.show.id))
      if (!!matchId){
        console.log("setting current fave")
        props.setCurrentFave(matchId)
      }
    }
    console.log(matchId)
  })
  const {currentFave} = props

  return(

    <>
    <div className="show-page">
    <BackButton/>
      <h1>{props.show.attributes.title}</h1>
      <img alt=""src={props.show.attributes.poster} height="100" width="100"/><br></br>
      {!currentFave ? <FavoriteButton currentUserId={props.currentUserId} show={props.show} faves={props.faves} addFave={props.addFave} deleteFave={props.deleteFave} /> : <UnfavoriteButton faveId={props.currentFaveId} currentUserId={props.currentUserId} show={props.show}/>}
      <p>{props.show.attributes.plot}</p>
      <p>Directed By:{props.show.attributes.director} | Written By:{props.show.attributes.writer}</p>
      <p>{props.show.attributes.genre}</p>
    </div>
    </>
  )



}

const mapStateToProps = state => {
  return({
    currentUserId: state.userReducer.current_user['id'],
    faves: state.favoriteReducer.favorites,
    currentFave: state.favoriteReducer.currentFave,
    currentFaveId: state.favoriteReducer.currentFaveId
  })
}
export default connect(mapStateToProps, {addFave, deleteFave, setCurrentFave})(ShowPage)
