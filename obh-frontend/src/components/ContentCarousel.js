import Carousel from 'react-bootstrap/Carousel'
import React from 'react'
import {useState} from 'react'
import {useNavigate} from "react-router-dom"
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const ContentCarousel = (props) => {


  let navigate = useNavigate();

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleRedirect = (event)=>{
    props.clearCurrentShow()
    console.log("Im clicked!", event.target.value)
    let id = event.target.value
    let show = props.media.find((show)=> show.id === id)
    console.log(show)
    props.setCurrentShow(show)
    navigate(`/show/${show.id}`)
   }

  return (
    <Container >
    <Carousel className="d-flex justify-content-center carousel-main"activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="carousel-container">
        <img
          className="carousel-img"
          src={props.rC1.attributes.poster}
          alt="First slide"

        />

        <Carousel.Caption className="carousel-caption">

          <Button  className="carousel-button" onClick={handleRedirect} value={props.rC1.id} variant="dark">{props.rC1.attributes.title}</Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carousel-container">
        <img
          className="carousel-img"

          src={props.rC2.attributes.poster}
          alt="Second slide"
        />

        <Carousel.Caption>

        <Button className="carousel-button" onClick={handleRedirect} value={props.rC2.id} variant="dark">{props.rC2.attributes.title}</Button>

        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item className="carousel-container">
        <img
          className="carousel-img"
          src={props.rC3.attributes.poster}
          alt="Third slide"
        />

        <Carousel.Caption>

        <Button variant="dark" className="carousel-button" onClick={handleRedirect} value={props.rC3.id} >{props.rC3.attributes.title}</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </Container>
  );
}

export default (ContentCarousel)
