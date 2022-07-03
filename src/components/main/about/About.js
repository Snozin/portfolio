import {
  AboutContainer,
  Bio,
  Title,
  Highlight,
  Img,
  ImgContainer,
  InfoContainer,
  Name,
  SkillsContainer,
  SkillTags,
} from './styledAbout'
import { Tag } from '../../../styles/globalStyles'
import profile from '../../../assets/img/profile-small.jpg'

export default function Hero() {
  return (
    <AboutContainer>
      <ImgContainer>
        <Img src={profile} />
      </ImgContainer>
      <InfoContainer>
        <Title>Encantado de conocerte,</Title>
        <Name>soy Misael</Name>
        <Bio>
          Texto muy chachi molón sobre como molo y lo mucho que molo, porque a
          ver, seamos serios, molar molo.
        </Bio>
        <Highlight>Codeación Intensa Duramente.</Highlight>
        <Bio>
          Habrá que poner algo aquí para que se vea que molo sin que sea muy
          sobrado para no molestar al resto de mortales que puede que molen
          también pero no tanto como molo yo.
        </Bio>
      </InfoContainer>

      <SkillsContainer>
        <Title style={{ 'padding-bottom': 8 }}>Tengo experiencia con </Title>
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
