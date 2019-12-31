import { createGlobalStyle } from "styled-components";

export const colors = {
  white: "#f0eff4",
  pink: "#da4167",
  raspberry: "#832161",
  violet: "#3d2645",
  black: "#0f0f0f"
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${colors.white};
    color: ${colors.black};
    margin: 0;
    
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  div {
    box-sizing: border-box;
  }
`;
