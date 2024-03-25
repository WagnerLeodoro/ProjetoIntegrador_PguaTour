import { useEffect, useState } from "react"
import { Card } from "../../components/Card"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Container } from "./styles"
import { api } from "../../services/api"

export function Home() {
  const [points, setPoints] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await api.get("/points")
      const data = response.data
      setPoints(data)
    }
    fetchData()
  }, [])

  return (
    <Container>
      <Header />
      <h1>Aonde você quer ir?</h1>
      {points.map((point) => (
        <Card
          key={point.id}
          name={point.name}
          id={point.id}
          description={point.description}
          onClick={point.id}
        />
      ))}
      <Footer />
    </Container>
  )
}
