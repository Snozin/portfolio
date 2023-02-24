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
    position: static;
    font-size: 1.3rem;
    background-color: transparent;
  }
`

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 20px 10px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 15px 0;
  }
`

export const NavItem = styled.li`
  padding: 5px 0;
  @media screen and (min-width: 1024px) {
    padding:0px;
    padding-right:20px;
  }
`
