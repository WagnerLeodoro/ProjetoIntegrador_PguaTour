import { Carousel } from "react-bootstrap"
import styled from "styled-components"

export const AttractionBanner = styled(Carousel)`
  max-width: 750px;
  margin: 22px auto;

  img {
    width: 100%;
    object-fit: cover;
  }
`
