import { HeaderContainer } from './styledHeader'
import Burger from './burger/Burger'
import Navbar from './navbar/Navbar'
import { useState, useEffect } from 'react'

export default function Header() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    // Agregar el evento resize a window y almacenar el ancho en el estado
    window.addEventListener('resize', handleResize)

    // Limpiar el listener del resize cuando se desmonte el componente
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <HeaderContainer>
      {screenWidth < 1024 ? <Burger></Burger> : <Navbar></Navbar>}
    </HeaderContainer>
  )
}
