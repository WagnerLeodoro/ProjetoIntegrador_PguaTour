import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 500px;
  justify-items: center;
  margin: 32px auto;
  width: 80%;

  img {
    width: 100%;
  }

  h1 {
    color: rgb(55, 167, 173);
    text-align: center;
    font-size: 2.5rem;
    padding-bottom: 1rem;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`
