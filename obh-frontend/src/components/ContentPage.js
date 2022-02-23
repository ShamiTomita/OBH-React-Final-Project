import React from "react"
import Button from 'react-bootstrap/Button'
import {setCurrentShow, clearCurrentShow} from '../actions/contentActions'
import {connect} from 'react-redux'
import {useNavigate} from "react-router-dom"
const ContentPage =(props)=>{

 let navigate = useNavigate();
const handleRedirect = (event)=>{
  props.clearCurrentShow()
  console.log("Im clicked!", event.target.value)
  let id = event.target.value
  let show = props.media.find((show)=> show.id === id)
  console.log(show)
  props.setCurrentShow(show)
  navigate(`/show/${show.id}`)
 }
 const content = props.media.map((content)=>{
   return <div className="content-card" key={content.id}>
           <Button variant="outline-primary" className="content-card-title" onClick={handleRedirect} value={content.id} >{content.attributes.title}</Button>
           <p>{content.attributes.content_type} | {content.attributes.country} | {content.attributes.language} | {content.attributes.year}</p>
           <p>{content.attributes.director} | {content.attributes.genre}</p>
           <img className="img-button"src={content.attributes.poster} alt={content.attributes.title}  height="100" width="100"/>
           <p>{content.attributes.plot}</p>
         </div>
    })
    return(
      <div className="container-fluid contentPage">
      <h2>MOVIES & SHOWS</h2>
        <div className="row">
            {content}
        </div>
      </div>
    )
  }



export default connect(null, {setCurrentShow, clearCurrentShow})(ContentPage)
