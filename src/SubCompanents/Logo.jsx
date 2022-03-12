import React from 'react'
import styled from 'styled-components'
import {Dark} from '../companents/DarkMood'


const LogoStyle= styled.h1`
display:inline-block;
color:${props => props.color === 'dark' ? Dark.text : Dark.body  };
font-family:'Pacifico', cursive;
position:fixed;
left:2rem;
font-size:2rem;
top:2rem;
z-index:1;

`

const Logo = (props) => {
  return (
    <LogoStyle color={props.theme}>Aydan</LogoStyle>
  )
}

export default Logo