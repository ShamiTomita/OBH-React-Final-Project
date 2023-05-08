import React from 'react'
import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
//Stateless #3
const BackButton = (props) => {
  let navigate = useNavigate();

  const handleRedirect = (event)=>{
    props.clearCurrentShow()
    props.clearCurrentFave()
    navigate(`/home`)
   }
  return(
    <Button className="btn btn-secondary" onClick={handleRedirect}>Back</Button>
  )
}

export default (BackButton)
