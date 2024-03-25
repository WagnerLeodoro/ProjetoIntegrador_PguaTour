import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;

  .cardColor {
    height: 300px;
    width: 100%;

    background-color: #03548a;
    border-radius: 6px;
  }

  h5 {
    font-size: 32px;
  }

  p {
    font-size: 16px;
  }

  .content {
    display: flex;
    flex-direction: column;
    width: 70%;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0 auto;
    color: white;
    text-align: center;
    font-size: 1.6rem;
  }
`
