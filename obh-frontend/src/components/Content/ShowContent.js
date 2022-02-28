import React from 'react'
//stateless #2
const ShowContent = (props) => {

  return(
    <div>
    <h1>{props.show.attributes.title}</h1>

    <img alt=""src={props.show.attributes.poster} height="100" width="100"/><br></br>

    <p>{props.show.attributes.plot}</p>
    <p>Directed By:{props.show.attributes.director} | Written By:{props.show.attributes.writer}</p>
    <p>{props.show.attributes.genre}</p>
    </div>
  )

}

export default ShowContent
