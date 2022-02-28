import React from 'react'
import Button from 'react-bootstrap/Button'
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



export default (UnfavoriteButton)
