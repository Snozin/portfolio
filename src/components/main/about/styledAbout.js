import styled from 'styled-components'
import { Section } from '../../../styles/globalStyles'

export const AboutContainer = styled(Section)`
  display: flex;
  flex-direction: column;
`

export const ImgContainer = styled.div`
  width: 100%;
  height: 260px;
  overflow: hidden;
  border-radius: 10px;
`

export const Img = styled.img`
  width: inherit;
  height: inherit;
  object-fit: contain;
`

export const InfoContainer = styled.div`
  padding: 16px 0;
`

export const Title = styled.h2`
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.02em;
`

export const Name = styled.h3`
  color: var(--primary-color);
  padding-bottom: 12px;
  font-size: 24px;
  font-family: 'Inter-Bold';
  line-height: 32px;
  letter-spacing: -0.02em;
`

export const Bio = styled.p`
  font-size: var(--font-size);
  line-height: var(--line-height);
`

export const Highlight = styled.p`
  color: var(--primary-color);
  padding: 12px 0;
  font-size: 20px;
  font-family: 'Helvetica';
  line-height: 26px;
`

export const SkillsContainer = styled.div``

export const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`
