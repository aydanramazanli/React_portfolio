import React from 'react'
import styled from 'styled-components'
import {Dark} from '../companents/DarkMood'
import {Link} from 'react-router-dom'


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
    <Link to ='/'>
      <LogoStyle color={props.theme}>Aydan</LogoStyle>
      </Link>
  
  )
}

export default Logo