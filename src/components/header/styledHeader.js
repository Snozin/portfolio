import styled from 'styled-components'

export const HeaderContainer = styled.header`
  grid-area: header;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  align-items: center;
  height: 60px;
  background-color: ${props => props.isActive && 'var(--text-color)'};
  /* opacity: ${props => props.isActive ? '0.5' : '1'}; */
`
