import styled from 'styled-components'

export const Form = styled.form`
  padding-top: 15px;
`

export const Input = styled.input`
  width: 100%;
  padding: 8px 10px;
  border: 2px solid var(--shadow-color);
  border-radius: 5px;
  outline: none;
  background-color: var(--bg-color);

  &:focus {
    border: 2px solid var(--primary-color);
  }

  @media screen and (min-width: 1024px) {
    padding: 23px 10px;
  }
`

export const Label = styled.label`
  color: var(--shadow-color);
  background-color: var(--bg-color);
  position: absolute;
  top: -10px;
  left: 10px;
  padding: 0 5px;

  @media screen and (min-width: 1024px) {
    font-size: 1.1rem;
    top: -12px;
    left: 15px;
    padding: 0 8px;
  }
`

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 100%;

  @media screen and (min-width: 1024px) {
    margin-bottom: 24px;
    padding: 0 8px;
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 130px;
  padding: 10px 10px 5px;
  background-color: var(--bg-color);
  border: 2px solid var(--shadow-color);
  border-radius: 5px;
  outline: none;
  resize: none;

  &:focus {
    border: 2px solid var(--primary-color);
  }

  @media screen and (min-width: 1024px) {
    height: 150px;
  }
`

export const SubmitContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: 1024px) {
    padding-top: 16px;
    padding-right: 10px;
  }
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
