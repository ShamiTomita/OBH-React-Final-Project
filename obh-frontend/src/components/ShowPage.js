import React, { useState, useEffect } from 'react';
import BackButton from "./BackButton"
import FavoriteButton from './FavoriteButton'
import UnfavoriteButton from './UnfavoriteButton'
import {connect} from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ShowContent from './ShowContent'
import {clearCurrentShow} from '../actions/contentActions'
import {addFave, deleteFave, setCurrentFave, clearCurrentFave} from '../actions/favoriteActions'
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
    <div className="show-page">
    <>
    <br></br>
    <BackButton clearCurrentShow={props.clearCurrentShow} clearCurrentFave={props.clearCurrentFave}/>
    <Container className="show-page-card">
    <Row>
    <Col>
    <ShowContent show={props.show}/>

        {!currentFave ? <FavoriteButton addFave={props.addFave} currentUserId={props.currentUserId} show={props.show} faves={props.faves}/> : <UnfavoriteButton deleteFave={props.deleteFave} fetchFaves={props.deleteFave} faveId={props.currentFaveId} currentUserId={props.currentUserId} show={props.show}/>}
    </Col>
    </Row>
    </Container>
    </>
    </div>
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
export default connect(mapStateToProps, {addFave, deleteFave, setCurrentFave, clearCurrentFave, clearCurrentShow})(ShowPage)
