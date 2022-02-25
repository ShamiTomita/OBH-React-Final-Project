import React from 'react'
import {addFave, fetchFaves} from '../actions/favoriteActions'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
const FavoriteButton = (props) => {


  console.log(props)
  const handleFave= (event)=>{
    let favorited_content = {
      content_id: props.show.id,
      user_id: props.currentUserId
    }
      
      console.log(favorited_content)
      props.addFave(favorited_content)
   }

  return(
    <Button onClick={handleFave}>Favorite</Button>

  )
}



export default connect(null, {addFave, fetchFaves})(FavoriteButton)
