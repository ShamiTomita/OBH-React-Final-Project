import React from "react"
import BackButton from "./BackButton"
import {connect} from 'react-redux'
import {addFave, deleteFave} from '../actions/favoriteActions'
const ShowPage = (props) => {

  console.log(props)
  const handleFave= (event)=>{
    let data = {
      content_id: props.show.id,
      user_id: props.currentUserId
    }
      console.log(data)
      props.addFave(data)
   }
  return(
    <>
    <div className="show-page">
    <BackButton/>
      <h1>{props.show.attributes.title}</h1>
      <img alt=""src={props.show.attributes.poster} height="100" width="100"/><br></br>
      <button onClick={handleFave}>Favorite</button>
      <p>{props.show.attributes.plot}</p>
      <p>Directed By:{props.show.attributes.director} | Written By:{props.show.attributes.writer}</p>
      <p>{props.show.attributes.genre}</p>
    </div>
    </>
  )



}

const mapStateToProps = state => {
  return({
    currentUserId: state.userReducer.current_user['id']
  })
}
export default connect(mapStateToProps, {addFave, deleteFave})(ShowPage)
