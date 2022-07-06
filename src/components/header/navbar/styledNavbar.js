import styled from 'styled-components'

export const NavContainer = styled.nav`
  background-color: green;
  /* width: 50px; */
  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    align-self: flex-end;
    height: 60px;
    background-color: aqua;
  }
`

export const NavList = styled.ul`
  display: none;
  @media screen and (min-width: 1024px) {
    display: flex;
    background-color: blue;
  }
`

export const NavItem = styled.li`
  @media screen and (min-width: 1024px) {
    background-color: red;
  }
`
