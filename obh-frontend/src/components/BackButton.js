import React from 'react'
import {useNavigate} from 'react-router-dom'
import {clearCurrentShow} from '../actions/contentActions'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
const BackButton = ({clearCurrentShow}) => {
  let navigate = useNavigate();

  const handleRedirect = (event)=>{
    clearCurrentShow()

    navigate(`/home`)
   }
  return(
    <Button onClick={handleRedirect}>Back</Button>
  )
}

export default connect(null, {clearCurrentShow})(BackButton)
