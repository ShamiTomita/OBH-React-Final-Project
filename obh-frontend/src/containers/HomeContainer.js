import React, {Component} from "react"

class HomeContainer extends Component{

componentDidMount(){
  fetch('http://localhost:3000/api/v1/contents', {
    method: "GET"
  })
  .then(response => response.json())
  .then(data => console.log(data))
}
  render(){
    return(
      <h1>Home</h1>

    )
  }
}
export default HomeContainer
