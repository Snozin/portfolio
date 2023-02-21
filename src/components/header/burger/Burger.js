import { NavContainer, NavItem, NavList } from '../navbar/styledNavbar'
import {
  BurgerContainer,
  BurgerLines,
  Line1,
  Line2,
  Line3,
} from './styledBurger'

export default function Burger({ isActive, setIsActive }) {
  const handleClick = (event) => {
    setIsActive(!isActive)
  }

  return (
    <>
      <BurgerContainer className="BurgerContainer" onClick={handleClick}>
        <BurgerLines>
          <Line1 isActive={isActive} />
          <Line2 isActive={isActive} />
          <Line3 isActive={isActive} />
        </BurgerLines>
      </BurgerContainer>
      {isActive && (
        <NavContainer className="NavContainer">
          <NavList>
            <NavItem>
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
      )}
    </>
  )
}
