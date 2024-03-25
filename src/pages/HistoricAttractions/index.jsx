import { useEffect, useState } from "react"
import { api } from "../../services/api"

import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Card } from "../../components/Card"

import { Container } from "./styles"
import Carangolas from "../../assets/img/carangolas.png"
import { Intro } from "../../components/Intro"

export function HistoricAttractions() {
  const [points, setPoints] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await api.get("/points")
      const data = response.data

      const ecologic = data.filter((point) => point.category === "Urbano")
      setPoints(ecologic)
    }
    fetchData()
  }, [])
  console.log()
  return (
    <Container>
      <Header />
      <section>
        <Intro
          title="O que é Turismo Histórico"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero aut officiis recusandae veritatis natus quam, fugiat iusto ea deleniti, amet consequatur nam autem nemo mollitia necessitatibus temporibus ad asperiores laudantium."
          img={Carangolas}
        />
      </section>
      <section>
        <h1>Aonde você quer ir?</h1>
        {points.map((point) => (
          <Card
            key={point.id}
            name={point.name}
            description={point.description}
          />
        ))}
      </section>
      <Footer />
    </Container>
  )
}
