import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
const DeleteUser = (props) => {
  const [show, setShow] = useState(false);
  let navigate = useNavigate();

  const handleDelete = (event) =>{
  event.preventDefault()

  console.log("im delete", props)
    let clickedUser = props.userId
    if (!!props.currentUser){
      props.clearCurrentUser()
    }
    props.deleteUser(clickedUser)
    setShow(false)
    navigate("/home")
  }
  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Are You Sure You Want To Delete This User?</Alert.Heading>
        <p>
        <Button onClick={handleDelete}>Yes</Button>
        </p>
      </Alert>
    );
  }
  return <button onClick={() => setShow(true)}>X</button>;
}

export default DeleteUser
