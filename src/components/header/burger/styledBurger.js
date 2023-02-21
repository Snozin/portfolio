import styled from 'styled-components'

export const BurgerContainer = styled.div`
  height: 30px;
  cursor: pointer;
`

export const BurgerLines = styled.div`
  height: 100%;
  width: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Line = styled.span`
  display: block;
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background: var(--text-color);
`

export const Line1 = styled(Line)`
  transform-origin: 0% 0%;
  transition: transform 0.5s ease-in-out;
  transform: ${(props) => (props.isActive ? 'rotate(45deg)' : 'none')};
  background-color: ${(props) =>
    props.isActive ? 'var(--primary-color)' : 'none'};
`

export const Line2 = styled(Line)`
  transition: ${(props) =>
    props.isActive
      ? 'transform 0.2s ease-in-out'
      : 'transform 0.3s ease-in-out 0.3s'};
  transform: ${(props) => (props.isActive ? 'scaleY(0)' : 'scaleY(1)')};
`

export const Line3 = styled(Line)`
  transform-origin: 0% 100%;
  transition: transform 0.5s ease-in-out;
  transform: ${(props) => (props.isActive ? 'rotate(-45deg)' : 'none')};
  background-color: ${(props) =>
    props.isActive ? 'var(--primary-color)' : 'none'};
`

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`