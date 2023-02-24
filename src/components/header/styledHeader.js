import styled from 'styled-components'

export const HeaderContainer = styled.header`
  grid-area: header;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
  height: 60px;
  background-color: ${(props) => props.isActive && 'var(--text-color)'};

  @media screen and (min-width: 1024px) {
    display: flex;
    height: 70px;
    padding: 0 75px;
    background-color: var(--text-color);
    border-radius: 0 0 8px 8px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.55);
    z-index: 1;
  }
`
