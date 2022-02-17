import React, {Component} from "react"

class ContentPage extends Component {

  render(){
    console.log("ContentPage", this.props)
    const content = this.props.media.map((content)=>{
      return<div key={content.attributes.id}>
              <h3>{content.attributes.title}</h3>
              <p>{content.attributes.content_type} | {content.attributes.country} | {content.attributes.language} | {content.attributes.year}</p>
              <p>{content.attributes.director} | {content.attributes.genre}</p>
              <img src={content.attributes.poster} alt={content.attributes.title}  height="100" width="100"/>
              <p>{content.attributes.plot}</p>
            </div>
    })
    return(

      <div>
      <h2>MOVIES & SHOWS</h2>
      {content}
      </div>
    )
  }
}

export default ContentPage
