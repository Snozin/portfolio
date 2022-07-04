import { Send } from '../../../icons'
import {
  Form,
  IconBox,
  Input,
  InputContainer,
  Label,
  Submit,
  SubmitContainer,
  TextArea,
} from './styledForm'
import { BoxUnderlined } from '../../../../styles/globalStyles'

export default function ContactForm() {
  return (
    <Form>
      <InputContainer>
        <Label htmlFor="Name">Nombre</Label>
        <Input type="text" id="Name" />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="Email">Email</Label>
        <Input type="email" id="Email" />
      </InputContainer>
      <InputContainer style={{ marginBottom: 0 }}>
        <Label htmlFor="Message">Mensaje</Label>
        <TextArea id="Message"></TextArea>
      </InputContainer>
      <SubmitContainer>
        <BoxUnderlined>
          <IconBox>
            <Send width={20} height={12} />
          </IconBox>
          <Submit>Enviar</Submit>
        </BoxUnderlined>
      </SubmitContainer>
    </Form>
  )
}
