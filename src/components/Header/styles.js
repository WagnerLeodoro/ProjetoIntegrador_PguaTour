import styled from "styled-components"

export const Container = styled.div`
  .navbar,
  .offcanvas {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};
  }

  .fixed {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1000;
  }

  .offcanvas-header {
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  }

  .logo {
    width: 100px;
    height: 100px;
  }

  .icon {
    width: 24px;
    height: 24px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  .botaoConta {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin: 12px 0;
    padding: 0;
  }

  @media (min-width: 980px) {
    .login-lg {
      display: none;
    }
  }
`

export const Banner = styled.div`
  display: flex;
  width: 100vw;
  height: 50vh;
  overflow: hidden;

  > img {
    width: 100%;
    object-fit: cover;
  }
`
