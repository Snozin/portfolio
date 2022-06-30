import styled, { createGlobalStyle } from "styled-components";

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
    background-color: var(--bg-color);
    color: var(--text-color);
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
`

export const Section = styled.section`
  /* background-color: beige; */
`