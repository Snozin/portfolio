import { NavContainer, NavList, NavItem } from './styledNavbar'
export default function Navbar() {
  return (
    <NavContainer className="NavContainer">
      Menusito
      <NavList className="NavList">
        <NavItem className="NavItem">
          <a href="#Home">Home</a>
        </NavItem>
        <NavItem className="NavItem">
          <a href="#Portfolio">Portfolio</a>
        </NavItem>
        <NavItem className="NavItem">
          <a href="#About">About Me</a>
        </NavItem>
        <NavItem className="NavItem">
          <a href="#Contact">Contact</a>
        </NavItem>
      </NavList>
    </NavContainer>
  )
}
