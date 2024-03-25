import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { TextCard } from "../../components/TextCard"

import Carangolas from "../../assets/img/carangolas.png"
import { Container } from "./styles"

export function About() {
  return (
    <Container>
      <Header />
      <h1> Sobre Nós</h1>
      <main className="container">
        <div className="equipe">
          <div className="sobreNos">
            <h2>Nossa História</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <img className="headimage" src={Carangolas} alt="" />
        </div>

        <TextCard />
      </main>
      <Footer />
    </Container>
  )
}
