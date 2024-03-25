import React, { useState } from "react"
import { Carousel } from "react-bootstrap"

const ImageCarousel = ({ images }) => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {images.map((image, i) => (
        <Carousel.Item key={i}>
          <img className="d-block w-100" src={image.src} alt={image.alt} />
          <Carousel.Caption>
            <h3>{image.caption}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ImageCarousel
