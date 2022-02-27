import React, {Component} from "react"
import UserCreateForm from '../components/UserCreateForm'
import UserSelect from "../components/UserSelect.js"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
class UserContainer extends Component{

  render(){
    console.log("userstate", this.props)
    let{users} = this.props
    return( users.length < 1?
      <div className="user-container">
      <Container>
        <Row>
        <Col>
      <h2>Please Create a User Profile</h2>
      <UserCreateForm/>
        </Col>
        </Row>
      </Container>
      </div>
      :
      <div className="user-container">
      <Container>
      <h2>Please Select a User Profile</h2>
      <Row>
        <Col>
      <UserSelect/>
        </Col>
      </Row>
        <br></br>
      <h2>Or Create Another Profile</h2>
      <Row>
      <Col>
      <UserCreateForm/>
        </Col>
        </Row>
      </Container>
      </div>
    )
  }
}


export default (UserContainer)
