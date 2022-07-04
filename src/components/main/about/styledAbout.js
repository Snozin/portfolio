import styled from 'styled-components'
import { Section } from '../../../styles/globalStyles'

export const AboutContainer = styled(Section)`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1024px) {
    padding-bottom: 150px;
  }
`

export const HorizontalCard = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 40px;
  }
`

export const ImgContainer = styled.div`
  width: 100%;
  height: 260px;
  overflow: hidden;
  border-radius: 10px;

  @media screen and (min-width: 1024px) {
    width: 360px;
    height: 440px;
  }
`

export const Img = styled.img`
  width: inherit;
  height: inherit;
  object-fit: contain;

  @media screen and (min-width: 1024px) {
    width: 360px;
    height: 440px;
    object-fit: cover;
  }
`

export const InfoContainer = styled.div`
  padding: 16px 0;

  @media screen and (min-width: 1024px) {
    width: 455px;
    max-width: 455px;
  }
`

export const Name = styled.h3`
  color: var(--primary-color);
  padding-bottom: 12px;
  font-size: 24px;
  font-family: 'Inter-Bold';
  line-height: 125%;
  letter-spacing: -0.02em;

  @media screen and (min-width: 1024px) {
    font-size: 32px;
    letter-spacing: -0.03em;
  }
`

export const Bio = styled.p`
  font-size: var(--font-size);
  line-height: var(--line-height);

  @media screen and (min-width: 1024px) {
    font-size: 16px;
    line-height: 150%;
    padding-right: 10px;
  }
`

export const Highlight = styled.p`
  color: var(--primary-color);
  padding: 12px 0;
  font-size: 20px;
  font-family: 'Helvetica';
  line-height: 26px;

  @media screen and (min-width: 1024px) {
    font-size: 24px;
    line-height: 150%;
  }
`

export const SkillsContainer = styled.div`
  @media screen and (min-width: 1024px) {
    padding-left: 65px;
  }
`

export const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`
