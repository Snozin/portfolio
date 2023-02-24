import {
  HeroContainer,
  Title,
  Highlight,
  Intro,
  Links,
  Social,
  LogoBox,
  Resume,
  ClipBox,
} from './styledHero'
import { LinkedIn, Github, Clip } from '../../icons'

export default function Hero() {
  return (
    <HeroContainer id="Home">
      <Title>soy misael duarte</Title>
      <Intro>
        <Highlight>Desarrollador web fullstack</Highlight>. Soy un apasionado de
        JavaScript y disfruto aprendiendo cosas nuevas día tras día.
      </Intro>
      <Links>
        <Social>
          <LogoBox>
            <a href="https://github.com/Snozin">
              <Github width={25} height={25} />
            </a>
          </LogoBox>
          <LogoBox>
            <a href="https://www.linkedin.com/in/misael-duarte/">
              <LinkedIn width={25} height={25} />
            </a>
          </LogoBox>
        </Social>
        <Resume>
          {/* //TODO Implementar funcionalidad de descarga del CV */}

          <ClipBox>
            <Clip />
          </ClipBox>
          <a href="#">Descargar CV</a>
        </Resume>
      </Links>
    </HeroContainer>
  )
}
