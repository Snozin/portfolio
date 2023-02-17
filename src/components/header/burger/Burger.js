import { BurgerContainer, BurgerLines, Line1, Line2, Line3 } from './styledBurger'

export default function Burger() {
  return (
    <BurgerContainer className='BurgerContainer'>
      <BurgerLines>
        <Line1 />
        <Line2 />
        <Line3 />
      </BurgerLines>
    </BurgerContainer>
  )
}
