import { HeaderContainer } from './styledHeader'
import Burger from './burger/Burger'
import Navbar from './navbar/Navbar'
import { useState, useLayoutEffect } from 'react'

export default function Header() {
  const [isMidScreen, setIsMidScreen] = useState(
    window.matchMedia('max-width: 1023')
  )

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1023px)')

    const handleQueryChange = (event) => {
      setIsMidScreen(event.matches)
    }

    mediaQuery.addEventListener('change', handleQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleQueryChange)
    }
  }, [])

  return (
    <HeaderContainer>
      {isMidScreen ? <Burger /> : <Navbar />}
    </HeaderContainer>
  )
}
