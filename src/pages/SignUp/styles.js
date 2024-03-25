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
  }

  label {
    width: 1px;
    height: 1px;
  }
  .button-container button {
    width: 150px;
  }

  @media (max-width: 768px) {
    .button-container {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
    }
    > button {
      width: 250px;
    }
  }
`
