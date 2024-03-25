import { useEffect, useState } from "react"
import { Carousel } from "react-bootstrap"
import { AttractionBanner, Container } from "./styles"

import banner from "../../assets/img/banner.png"
import { Header } from "../../components/Header"
import { FaStar } from "react-icons/fa"
import { Rating } from "../../components/Rating"

export function Details() {
  const [images, setImages] = useState([])

  const data = [banner, banner, banner]

  useEffect(() => {
    async function fetchData() {
      setImages(data)
    }

    fetchData()
  }, [])
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <Container>
      <Header />
      <section className="content">
        <h1>Nome do Ponto</h1>
        <h2>Localização, xxx, xxx, xxxx</h2>

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

        <div className="container">
          <div className="d-flex justify-content-around">
            <h2 className="text-center ">Sobre</h2>
            <span>
              <Rating grade={4} isfull={false} />
            </span>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rem
              dicta provident velit explicabo cumque, culpa accusantium quis
              sequi, placeat totam neque! Totam repellat modi magni incidunt
              provident sapiente doloremque?
            </p>
          </div>
        </div>

        <h2>Avaliações</h2>
        <div className="card container">
          <h3 className="card-title">titulo do comentário</h3>
          <p> Autor </p>
          <p className="card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rem
            dicta provident velit explicabo cumque, culpa accusantium quis
            sequi, placeat totam neque! Totam repellat modi magni incidunt
            provident sapiente doloremque?
          </p>
          <p className="date"> data </p>
        </div>
      </section>
    </Container>
  )
}
