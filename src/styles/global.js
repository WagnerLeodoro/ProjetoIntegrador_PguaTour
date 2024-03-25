import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
      width: 8px;
    }
    ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    border-radius: 5px;
  }
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND} ;
    color: ${({ theme }) => theme.COLORS.GRAY_600};
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;  
  }

  body, input, button, textarea {
    font-family: ${({ theme }) => theme.FONTS.TEXT_BASE};
    font-size: 16px;
    outline: none;
  }

  h1, h2, h3 {
    font-family: ${({ theme }) => theme.FONTS.TEXT_LG};
    color: ${({ theme }) => theme.COLORS.TITLE_COLOR};
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9)
  }
`
