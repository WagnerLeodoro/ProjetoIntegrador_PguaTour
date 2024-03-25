import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Card } from "../../components/Card"

import { Container } from "./styles"
import Carangolas from "../../assets/img/carangolas.png"

export function HistoricAttractions() {
  return (
    <Container>
      <Header />
      <section>
        <Intro
          title="O que é Turismo Ecológico"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero aut officiis recusandae veritatis natus quam, fugiat iusto ea deleniti, amet consequatur nam autem nemo mollitia necessitatibus temporibus ad asperiores laudantium."
          img={Carangolas}
        />
      </section>
      <section>
        <h1>Aonde você quer ir?</h1>
        <Card />
      </section>
      <Footer />
    </Container>
  )
}
