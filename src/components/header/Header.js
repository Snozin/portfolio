import { HeaderContainer } from './styledHeader'
import Burger from './burger/Burger'
import Navbar from './navbar/Navbar'

export default function Header() {
  return (
    <HeaderContainer>
      <Burger>
        <Navbar></Navbar>
      </Burger>
    </HeaderContainer>
  )
}
