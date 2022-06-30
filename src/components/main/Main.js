import { MainContainer } from './styledMain'
import Hero from './hero/Hero'
import Projects from './projects/Projects'
import About from './about/About'
import Contact from './contact/Contact'

export default function Main() {
  return (
    <MainContainer>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </MainContainer>
  )
}
