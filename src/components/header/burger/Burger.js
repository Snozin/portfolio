import { useState } from 'react'
import {
  BurgerContainer,
  BurgerLines,
  Line1,
  Line2,
  Line3,
  MenuContainer,
  MenuItem,
} from './styledBurger'

export default function Burger() {
  const [showSidebar, setShowSidebar] = useState(false)
  const handleClick = (event) => {
    console.log('uwu', event)
    setShowSidebar(!showSidebar)
  }

  return (
    <>
      <BurgerContainer className="BurgerContainer" onClick={handleClick}>
        <BurgerLines>
          <Line1 />
          <Line2 />
          <Line3 />
        </BurgerLines>
      </BurgerContainer>
      <MenuContainer show={showSidebar}>
        <MenuItem>cosa</MenuItem> 
        <MenuItem>cosa</MenuItem> 
        <MenuItem>cosa</MenuItem> 
      </MenuContainer>
    </>
  )
}
