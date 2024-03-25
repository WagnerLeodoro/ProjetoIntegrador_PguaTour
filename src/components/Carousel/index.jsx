import React, { useState } from "react"
import { AttractionBanner } from "./styles"
import { Carousel } from "react-bootstrap"

export function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <AttractionBanner
      activeIndex={index}
      onSelect={handleSelect}
      className="container"
    >
      {images.map((image, i) => (
        <Carousel.Item key={i}>
          <img className="w-100" src={image} alt={image} />
        </Carousel.Item>
      ))}
    </AttractionBanner>
  )
}
