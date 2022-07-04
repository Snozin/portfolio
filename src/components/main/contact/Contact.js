import { ContactContainer } from './styledContact'
import { Title } from '../../../styles/globalStyles'
import ContactForm from './form/ContactForm'
export default function Hero() {
  return (
    <ContactContainer>
      <Title>Envíame un mensaje</Title>
      <ContactForm />
    </ContactContainer>
  )
}
