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
} from './styledProjects'
import { Tag } from '../../../styles/globalStyles'
import placeholder from '../../../assets/img/placeholder.jpg'
import { Code, Check } from '../../icons'

export default function Hero() {
  return (
    <ProjectsContainer>
      <Title>Proyectos</Title>
      <ProjectCard>
        <ImgContainer>
          <Img src={placeholder} />
        </ImgContainer>
        <ProjectTitle>Titulo 1</ProjectTitle>
        <TagsContainer>
          <Tag>HTML</Tag>
          <Tag>React</Tag>
          <Tag>JavaScript</Tag>
          <Tag>CSS</Tag>
          <Tag>MongoDB</Tag>
          <Tag>JavaScript</Tag>
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

    </ProjectsContainer>
  )
}
