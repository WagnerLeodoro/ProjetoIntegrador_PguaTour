import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { format } from "date-fns"

import { Header } from "../../components/Header"
import { Rating } from "../../components/Rating"
import { ImageCarousel } from "../../components/Carousel"

import { Container } from "./styles"

export function Details() {
  const { id } = useParams()

  const [images, setImages] = useState([])
  const [point, setPoint] = useState([])
  const [comments, setComments] = useState([])

  const [date, setDate] = useState("")

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/points/details/${id}`)
      const [data] = response.data

      const imageUrl = data.images
      const link = imageUrl.map((image) => image.link_image)

      const comments = data.comments

      const created_at = comments.map((comment) =>
        format(comment.created_at, "dd/MM/yyyy 'às' HH:mm:ss"),
      )

      setImages(link)
      setPoint(data)
      setComments(comments)
      setDate(created_at)
    }
    fetchData()
  }, [])

  return (
    <Container>
      <Header />
      <section className="content">
        <h1>{point.name}</h1>
        <h2>{point.location}</h2>

        <ImageCarousel images={images} />

        <div className="container">
          <div className="d-flex justify-content-around">
            <h2 className="text-center ">Sobre</h2>
            <span>
              <Rating grade={point.mediaRating} isfull={false} />
            </span>
          </div>
          <div>
            <p>{point.description}</p>
          </div>
        </div>

        <h2>Avaliações</h2>
        <div className="comments">
          {comments.map((comment, i) => (
            <div key={i} className="card container">
              <h3 className="card-title">{comment.title}</h3>
              <p>{comment.name} </p>
              <p className="card-body">{comment.comment}</p>
              <p className="date">{date[i]}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  )
}
