import styled from 'styled-components'
import { Section } from '../../../styles/globalStyles'

export const ContactContainer = styled(Section)`
  padding-bottom: 50px;

  @media screen and (min-width: 1024px) {
    max-width: 550px;
    width: 550px;
    margin: 0 auto;
    padding-bottom: 200px;
  }
`
