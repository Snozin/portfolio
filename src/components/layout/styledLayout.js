import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'header'
    'main';
  min-width: 305px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'header header'
      'main main';
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      'header header header'
      'main main main';

    max-width: 1024px;
  }
`
