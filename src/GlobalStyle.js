import {createGlobalStyle } from "styled-components";




const GlobalStyle = createGlobalStyle`
*,*::before,*::after,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
h1,h2,h3,h4,h5,h6{
    display: inline-block;
}
body{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Lato', sans-serif;
    font-family: 'Mukta', sans-serif;
    font-family: 'Pacifico', cursive;
    font-family: 'Poppins', sans-serif;
    font-family: 'Roboto', sans-serif;
    font-family: 'Roboto Mono', monospace;
    font-family: 'Roboto Serif', serif;
}
`

export default GlobalStyle;