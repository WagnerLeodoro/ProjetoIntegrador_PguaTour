import styled from "styled-components"

export const Container = styled.footer`
  padding: 16px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: end;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_FOOTER};
  color: ${({ theme }) => theme.COLORS.TEXT_FOOTER};

  .text-container {
    flex: 1;
    text-align: center;
    font-weight: 500;
    line-height: 8px;

    p {
      font-size: 14px;
    }

    h3 {
      font-weight: 700;
      font-size: 22px;
      color: ${({ theme }) => theme.COLORS.TEXT_FOOTER};
    }
  }

  .parceiros {
    display: grid;
    grid-template-columns: repeat(2, 150px);
    grid-template-rows: repeat(2, 100px);
    justify-items: center;
    align-items: end;
    padding-bottom: 24px;
    gap: 12px;

    img {
      width: 100px;
    }
  }

  .social {
    display: flex;
    width: 100px;
    align-items: center;
    justify-content: center;
    gap: 12px;

    svg {
      width: 40px;
      height: 40px;
      color: ${({ theme }) => theme.COLORS.TEXT_FOOTER};
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`
