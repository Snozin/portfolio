import styled from 'styled-components'
import { BoxUnderlined, Section } from '../../../styles/globalStyles'

export const ProjectsContainer = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1024px) {
    padding-bottom: 120px;
  }
`

export const Title = styled.h2`
  align-self: flex-start;
  color: var(--primary-color);
  font-family: 'Inter-Bold';
  font-size: 2.6rem;
  line-height: 60px;
  letter-spacing: -0.02em;
  padding-bottom: 20px;

  @media screen and (min-width: 1024px) {
    padding-left: 65px;
  }
`

export const CardsContainer = styled.div`
  @media screen and (min-width: 1024px) {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
`

export const ProjectCard = styled.article`
  padding-bottom: 65px;

  @media screen and (min-width: 1024px) {
    width: 400px;
  }
`

export const ImgContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;

  @media screen and (min-width: 1024px) {
    height: 300px;
  }
`

export const Img = styled.img`
  width: inherit;
  height: inherit;
  object-fit: cover;
`

export const ProjectTitle = styled.h3`
  color: var(--primary-color);
  font-size: 24px;
  font-family: 'Inter-Bold';
  line-height: 135%;
  letter-spacing: -0.02em;
  padding: 15px 0 8px;
`

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`
export const Description = styled.p`
  padding: 10px 0;
  font-size: 16px;
  line-height: 150%;
`

export const LinksContainer = styled.div`
  display: flex;
`

export const LinkItem = styled(BoxUnderlined)`
  &:first-of-type {
    margin-right: 15px;
  }
`

export const IconBox = styled.div`
  text-align: center;
  width: 18px;
  height: 25px;
  margin-right: 5px;
`
