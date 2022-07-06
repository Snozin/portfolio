import { NavContainer, NavList, NavItem } from './styledNavbar'
export default function Navbar() {
  return (
    <NavContainer>
      Menusito
      <NavList>
        <NavItem>
          <a href="#Home">Home</a>
        </NavItem>
        <NavItem>
          <a href="#Portfolio">Portfolio</a>
        </NavItem>
        <NavItem>
          <a href="#About">About Me</a>
        </NavItem>
        <NavItem>
          <a href="#Contact">Contact</a>
        </NavItem>
      </NavList>
    </NavContainer>
  )
}
