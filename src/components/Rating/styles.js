import styled from "styled-components"

export const Container = styled.div.attrs((props) => ({
  type: "boolean",
  $full: props.$full,
}))`
  display: flex;
  margin: 8px 0;
  gap: 12px;
  > svg {
    font-size: 24px;
    color: yellow;
  }
`
