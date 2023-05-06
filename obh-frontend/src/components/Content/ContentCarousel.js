import Carousel from 'react-bootstrap/Carousel'
import React from 'react'
import {useState} from 'react'
import {useNavigate} from "react-router-dom"
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
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
    navigate(`/shows/${show.id}`)
   }

  return (
    <Container >
    <Carousel className="d-flex justify-content-center carousel-main"activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="carousel-container">
        <img
          className="carousel-img"
            src={!!props.rC1.attributes.poster ? props.rC1.attributes.poster : "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"}
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
