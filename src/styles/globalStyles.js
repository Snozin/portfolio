import styled, { createGlobalStyle } from 'styled-components'

import InterBold from '../assets/fonts/Inter-Bold.ttf'
import Inter from '../assets/fonts/Inter-Medium.ttf'

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

    --font-size: 0.88rem;
    --line-height: 150%;
  }

  @media screen and (min-width: 768px) {
    :root {
      --font-size: 1rem;
      --line-height: 1.5rem;
    }
  }
  
  @media screen and (min-width: 1024px) {
    :root {
      --font-size: 1rem;
      --line-height: 1.5rem;
    }
  }

  body {
    font-family: 'Inter';
    color: var(--text-color);
    background-color: var(--bg-color);

    ::-webkit-scrollbar {
      background-color: transparent;
      width: 8px;
    } 

    ::-webkit-scrollbar-thumb {
      background-color: var(--shadow-color);
    }
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

  h1, h2, h3, p {
    margin: 0;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${Inter});
  }

  @font-face {
    font-family: 'Inter-Bold';
    src: url(${InterBold});
  }
`

export const Section = styled.section`
  padding: 10px;
`

export const BoxUnderlined = styled.div`
  width: fit-content;
  height: 40px;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter-Bold';
  border-bottom: 2px solid var(--primary-color);
`

export const Tag = styled.div`
  padding: 4px 8px;
  margin-right: 5px;
  margin-bottom: 5px;
  color: var(--text-color);
  font-size: 12px;
  line-height: 18px;
  border: 1px solid var(--primary-color);
  border-radius: 4px;
  &:last-of-type {
    margin-right: 0;
  }
`
