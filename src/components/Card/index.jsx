import { useEffect, useState } from "react"
import { Carousel } from "react-bootstrap"

import { api } from "../../services/api"

import { Container } from "./styles"
import { useNavigate } from "react-router-dom"

export function Card({ name, description, id }) {
  const [images, setImages] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/points/`)
      const [data] = response.data
      const imageUrl = data.images
      const link = imageUrl.map((image) => image.link_image)

      setImages(link)
    }

    fetchData()
  }, [])
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  return (
    <Container className="wrap">
      <div className="tourismCard">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="container carousel-img"
        >
          {images.map((image, i) => (
            <Carousel.Item key={i}>
              <img className="w-100" src={image} alt={image} />
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="cardContent">
          <h2>{name}</h2>
          <p>{description}</p>

          <button
            type="button"
            className="btn btn-info"
            onClick={() => navigate(`/details/${id}`)}
          >
            Saiba Mais <i className="bi bi-geo-alt-fill"></i>
          </button>
        </div>
      </div>
    </Container>
  )
}
