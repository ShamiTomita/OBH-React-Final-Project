import Carousel from 'react-bootstrap/Carousel'
import React from 'react'
import {useState} from 'react'
const ContentCarousel = (props) => {


  console.log(props)

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (

    <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.rC1.attributes.poster}
          alt="First slide"

        />
        <Carousel.Caption>
          <h3>{props.rC1.attributes.title}</h3>
          <p>{props.rC1.attributes.plot}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"

          src={props.rC2.attributes.poster}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>{props.rC2.attributes.title}</h3>
        <p>{props.rC2.attributes.plot}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.rC3.attributes.poster}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>{props.rC3.attributes.title}</h3>
        <p>{props.rC3.attributes.plot}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ContentCarousel
