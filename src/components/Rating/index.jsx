import { Container } from "./styles"
import { FaStar } from "react-icons/fa"

export function Rating({ grade, full = false }) {
  let stars = []
  for (let i = 1; i <= 5; i++) {
    if (i <= Number(grade)) {
      stars.push(<FaStar key={i} />)
    }
  }
  return <Container $full={full}>{stars}</Container>
}
