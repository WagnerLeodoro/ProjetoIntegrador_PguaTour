import { Container } from "./styles"

export function Intro({ title, content, img }) {
  return (
    <Container>
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </Container>
  )
}
