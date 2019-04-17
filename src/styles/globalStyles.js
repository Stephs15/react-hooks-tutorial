import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    background-color: #0B0C10;
    color: white;
  }

  body * {
    box-sizing: border-box;
  }
`

const colors = {
  woodsmoke: '#0B0C10',
  ebonyClay: '#1F2833',
  silverSand: '#C5C6C7',
  spray: '#66F6F1',
  keppel: '#45A29E'
}

export {colors};
export default GlobalStyle;