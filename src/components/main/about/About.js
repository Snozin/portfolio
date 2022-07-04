import {
  AboutContainer,
  Bio,
  Highlight,
  Img,
  ImgContainer,
  InfoContainer,
  Name,
  SkillsContainer,
  SkillTags,
} from './styledAbout'
import { Tag, Title } from '../../../styles/globalStyles'
import profile from '../../../assets/img/profile-small.jpg'

export default function Hero() {
  return (
    <AboutContainer>
      <ImgContainer>
        <Img src={profile} />
      </ImgContainer>
      <InfoContainer>
        <Title>Encantado de conocerte,</Title>
        <Name>soy Misael Duarte</Name>
        <Bio>Siempre curioso, aprendiendo y avanzando cada día.</Bio>
        <Highlight>Código, Aprendizaje, Mejora.</Highlight>
        <Bio>
          Me apasiona el desarrollo y me encanta crear aplicaciones y webs con
          JavaScript. Disfruto todo el proceso, desde el planteamiento de ideas
          hasta la implementación final.
        </Bio>
      </InfoContainer>

      <SkillsContainer>
        <Title style={{ paddingBottom: 8 }}>Mi experiencia </Title>
        <SkillTags>
          <Tag>JavaScript</Tag>
          <Tag>React</Tag>
          <Tag>NodeJS</Tag>
          <Tag>Express</Tag>
          <Tag>MongoDB</Tag>
          <Tag>HTML</Tag>
          <Tag>CSS</Tag>
        </SkillTags>
      </SkillsContainer>
    </AboutContainer>
  )
}
