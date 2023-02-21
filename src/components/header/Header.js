import { HeaderContainer } from './styledHeader'
import Burger from './burger/Burger'
import Navbar from './navbar/Navbar'
import { useState, useLayoutEffect } from 'react'

export default function Header() {
  const [isMidScreen, setIsMidScreen] = useState(window.innerWidth)
  const [isActive, setIsActive] = useState(false)
  useLayoutEffect(() => {
    const handleQueryChange = () => {
      setIsMidScreen(window.innerWidth)
    }

    window.addEventListener('resize', handleQueryChange)

    return () => {
      window.removeEventListener('resize', handleQueryChange)
    }
  }, [])

  return (
    <HeaderContainer isActive={isActive}>
      {isMidScreen < 1024 ? (
        <Burger isActive={isActive} setIsActive={setIsActive} />
      ) : (
        <Navbar />
      )}
    </HeaderContainer>
  )
}
