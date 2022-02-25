import React from 'react'
import {deleteFave, fetchFaves} from '../actions/favoriteActions'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
const UnfavoriteButton = (props) => {

  console.log(props.faveId)

  const unfavorite= (event)=>{
      console.log(props.faveId)
      props.deleteFave(props.faveId)
   }

  return(
    <Button onClick={unfavorite}>Unfavorite</Button>

  )
}



export default connect(null, {deleteFave, fetchFaves})(UnfavoriteButton)
