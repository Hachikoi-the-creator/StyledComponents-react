import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;

  /* color-scheme: light dark; */
  /* color: rgba(255, 255, 255, 0; */
  background-color: ${({ theme }) => theme.colors.bg};

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

`;
