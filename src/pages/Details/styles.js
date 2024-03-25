import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px auto;
  h1 {
    text-align: center;
    font-size: 2.5rem;
    padding-bottom: 1rem;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  span {
    font-size: 16px;
  }

  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 32px;
    align-items: center;

    .comments {
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 12px;

      .date {
        font-size: 12px;
      }
    }
    .card {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_FORM};
    }

    .card-title {
      color: ${({ theme }) => theme.COLORS.TEXT_FOOTER};
    }
  }
`
