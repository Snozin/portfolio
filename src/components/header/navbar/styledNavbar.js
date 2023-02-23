import styled from 'styled-components'

const NavbarContainer = styled.nav`
  background-color: var(--text-color);
  /* TODO Intentar jugar con la opacidad para el fondo semitransparente */
  /* opacity: 0.98; */
  color: var(--primary-color);
  font-family: 'Inter-Bold';
  font-size: 2rem;
`

export const NavContainer = styled(NavbarContainer)`
  display: block;
  position: absolute;
  top: 55px;
  right: 0;
  width: 100%;

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    align-self: flex-end;
    height: 60px;
    background-color: aqua;
  }
`

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 20px 10px;

  @media screen and (min-width: 1024px) {
    display: flex;
    background-color: blue;
  }
`

export const NavItem = styled.li`
  padding: 5px 0;
  @media screen and (min-width: 1024px) {
    background-color: red;
  }
`
