import styled, { createGlobalStyle } from 'styled-components'

import Inter from '../assets/fonts/Inter-Bold.ttf'

export const GlobalStyles = createGlobalStyle`
    * {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  :root {
    --bg-color: #f8fbfb;
    --primary-color: #ff9d00;
    --primary-color-offset: #ffca00;
    --secondary-color: #bae8e8;
    --border-color: #e3f6f5;
    --text-color: #272343;
    --shadow-color: rgba(3, 19, 23, 0.25);
  }

  body {
    font-family: 'Inter';
    color: var(--text-color);
    background-color: var(--bg-color);
  }

  a {
    text-decoration: none;
    color: unset;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  h1, h2, p {
    margin: 0;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${Inter});
  }
`

export const Section = styled.section`
  padding: 10px;
`

export const BoxUnderlined = styled.div`
  width: 50px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid var(--primary-color);
`
