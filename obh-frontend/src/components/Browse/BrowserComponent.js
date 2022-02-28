import React from "react"
import Button from 'react-bootstrap/Button'
import {useNavigate} from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const BrowserComponent = (props) => {

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
  return<div className="content-card" key={content.id}>
         <Button variant="primary" className="content-card-title" onClick={handleRedirect} value={content.id} >{content.attributes.title}</Button>
          <p>{content.attributes.content_type} | {content.attributes.country} | {content.attributes.language} | {content.attributes.year}</p>
         <p>{content.attributes.director} | {content.attributes.genre}</p>
         <img className="img-button"src={content.attributes.poster} alt={content.attributes.title}  height="100" width="100"/><p>{content.attributes.plot}</p>
        </div>


     })
     return(

       <div className="container-fluid contentPage">
         <div className="row">
             {content}
         </div>
       </div>

     )
   }

export default BrowserComponent
