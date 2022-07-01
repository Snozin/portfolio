import styled from 'styled-components'
import { Section, BoxUnderlined } from '../../../styles/globalStyles'

export const HeroContainer = styled(Section)`
  /* background-color: green; */
`

export const Title = styled.h1`
  text-transform: capitalize;
  font-size: 3rem;
  font-style: normal;
  line-height: 60px;
  letter-spacing: -0.03em;
`

export const Intro = styled.p`
  font-size: 1.5rem;
  font-style: normal;
  line-height: 32px;
  letter-spacing: -0.02em;
`

export const Highlight = styled.span`
  color: var(--primary-color);
`

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`

export const Social = styled.div`
  display: flex;
  align-items: center;
`
export const LogoBox = styled.div`
  width: 25px;
  height: 25px;
  &:first-of-type {
    margin-right: 15px;
  }
`

export const Resume = styled(BoxUnderlined)`
  width: 130px;
`

export const ClipBox = styled.div`
  margin-right: 5px;
  height: 25px;
`
