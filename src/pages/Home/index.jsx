import { Card } from "../../components/Card"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Container } from "./styles"

export function Home() {
  return (
    <Container>
      <Header />
      <h1>Aonde você quer ir?</h1>
      <Card />
      <Footer />
    </Container>
  )
}
