import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  h1 {
    color: rgb(55, 167, 173);
    text-align: center;
    font-size: 2.5rem;
    padding-bottom: 1rem;
    margin-top: 30px;
    margin-bottom: 30px;
    font-family: "Hammersmith One", sans-serif;
  }

  .equipe {
    display: grid;
    grid-template-columns: 1fr 500px;
    justify-items: center;
    > img {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .equipe {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
`
