import React from 'react'
import Button from 'react-bootstrap/Button'
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



export default (FavoriteButton)
