import {
  ImgContainer,
  Img,
  ProjectCard,
  ProjectsContainer,
  Title,
  ProjectTitle,
  TagsContainer,
  Description,
  LinksContainer,
  LinkItem,
  IconBox,
  CardsContainer,
} from './styledProjects'
import { Tag } from '../../../styles/globalStyles'
import placeholder from '../../../assets/img/placeholder.jpg'
import ticTacToe from '../../../assets/img/tictactoe.webp'
import { Code, Check } from '../../icons'

export default function Hero() {
  return (
    <ProjectsContainer id="Portfolio">
      <Title>Proyectos</Title>
      <CardsContainer>
        <ProjectCard>
          <ImgContainer>
            <Img src={ticTacToe || placeholder} />
          </ImgContainer>
          <ProjectTitle>Tic Tac Toe</ProjectTitle>
          <TagsContainer>
            <Tag>HTML</Tag>
            <Tag>CSS</Tag>
            <Tag>React</Tag>
            <Tag>JavaScript</Tag>
          </TagsContainer>
          <Description>
            Pequeño juego de tres en raya (TicTacToe) realizado con React para
            practicar con el hook useEffect, los renderizados condicionales
            y el renderizado de listas.
          </Description>
          <LinksContainer>
            <LinkItem>
              <IconBox>
                <Code width={18} height={25} />
              </IconBox>
              <a
                href="https://github.com/Snozin/TicTacToe-React"
                target="_blank"
                rel="noreferrer"
              >
                Código
              </a>
            </LinkItem>
            <LinkItem>
              <IconBox>
                <Check width={18} height={25} />
              </IconBox>
              <a
                href="https://snozin.github.io/TicTacToe-React/"
                target="_blank"
                rel="noreferrer"
              >
                Demo
              </a>
            </LinkItem>
          </LinksContainer>
        </ProjectCard>

        <ProjectCard>
          <ImgContainer>
            <Img src={placeholder} />
          </ImgContainer>
          <ProjectTitle>Titulo 2</ProjectTitle>
          <TagsContainer>
            <Tag>HTML</Tag>
            <Tag>JavaScript</Tag>
            <Tag>CSS</Tag>
            <Tag>MongoDB</Tag>
            <Tag>JavaScript</Tag>
            <Tag>React</Tag>
            <Tag>MongoDB</Tag>
          </TagsContainer>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            commodo purus sed congue gravida. Nam vehicula orci ligula, id
            convallis diam ultricies volutpat. Sed nulla nisl, egestas et magna
            nec, facilisis gravida ex.
          </Description>
          <LinksContainer>
            <LinkItem>
              <IconBox>
                <Code width={18} height={25} />
              </IconBox>
              Código
            </LinkItem>
            <LinkItem>
              <IconBox>
                <Check width={18} height={25} />
              </IconBox>
              Demo
            </LinkItem>
          </LinksContainer>
        </ProjectCard>
      </CardsContainer>
    </ProjectsContainer>
  )
}
