import React from 'react'
import {useNavigate} from 'react-router-dom'
import {clearCurrentFave} from '../actions/favoriteActions'
import {clearCurrentShow} from '../actions/contentActions'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
const BackButton = ({clearCurrentShow, clearCurrentFave}) => {
  let navigate = useNavigate();

  const handleRedirect = (event)=>{
    clearCurrentShow()
    clearCurrentFave()
    navigate(`/home`)
   }
  return(
    <Button onClick={handleRedirect}>Back</Button>
  )
}

export default connect(null, {clearCurrentShow, clearCurrentFave})(BackButton)
