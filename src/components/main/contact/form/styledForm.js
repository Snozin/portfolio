import styled from 'styled-components'

export const Form = styled.form`
  padding-top: 15px;
`

export const Input = styled.input`
  width: 100%;
  height: 35px;
  padding: 5px;
  border: 2px solid var(--shadow-color);
  border-radius: 5px;
  outline: none;
  background-color: var(--bg-color);

  &:focus {
    border: 2px solid var(--primary-color);
  }
`

export const Label = styled.label`
  color: var(--shadow-color);
  background-color: var(--bg-color);
  position: absolute;
  top: -10px;
  left: 10px;
  padding: 0 5px;
`

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 100%;
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 5px;
  background-color: var(--bg-color);
  border: 2px solid var(--shadow-color);
  border-radius: 5px;
  outline: none;
  resize: none;

  &:focus {
    border: 2px solid var(--primary-color);
  }
`

export const SubmitContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const IconBox = styled.div`
  width: 18px;
  height: 20px;
`

export const Submit = styled.button`
  padding: 0;
  padding-left: 5px;
  background-color: var(--bg-color);
  border: none;
  font-family: 'Inter-Bold';
  font-size: 16px;
`
