import { createGlobalStyle } from 'styled-components'

export const defaultTheme = {
  black: '#0A0A0A',
  white: '#FFFFFF',
  purple: '#656EC2',
  textBlack: '#282626',
  textBlack2: '#767676',
  shadow: '#64646f33',
}

export const GlobalStyle = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
    font-family: "Montserrat", "Fira Sans", sans-serif;
    background-color: ${(props) => props.theme.white};
}
* {
  background: none;
  border: none;
  box-sizing: border-box;
  color: ${(props) => props.theme.textBlack};
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Fira Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
`
