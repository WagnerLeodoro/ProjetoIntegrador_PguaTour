import styled from "styled-components"

export const Container = styled.div`
  .cardContent {
    display: flex;
  }
  .tourismCard {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    background-color: rgb(246, 246, 246);
    margin-bottom: 2rem;
  }
  .carousel {
    min-width: 350px;
    height: fit-content;
  }
  .carousel-item img {
    width: 100%;
    height: 350px;
    object-fit: cover;
  }
  .cardContent {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 2rem auto 0;
    height: 100%;
  }
  .cardContent h2 {
    color: #32c3cc;
    padding-bottom: 0.5rem;
    font-size: 2rem;
    font-family: "Hammersmith One", sans-serif;
  }
  .cardContent p {
    width: 75%;
    text-align: justify;
    padding-bottom: 1rem;
    font-family: "Inter", sans-serif;
    font-weight: 500;
  }
  .cardContent button {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    background-color: #012f66;
    border: none;
    font-family: "Inter", sans-serif;
    font-weight: 400;
  }

  .cardContent button:hover {
    background-color: #012f66;
    border: none;
  }

  @media (max-width: 1024px) {
    .tourismCard {
      width: 80%;
      margin: 0 auto 2rem;
    }
  }
  @media (max-width: 768px) {
    .tourismCard {
      display: flex;
      flex-direction: column;
      width: 70%;
    }
    .carousel {
      min-width: 200px;
    }
    .btn-info {
      margin-bottom: 1.7rem;
    }
  }
`
