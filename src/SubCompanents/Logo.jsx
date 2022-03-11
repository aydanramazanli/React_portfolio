import React from 'react'
import styled from 'styled-components'


const LogoStyle= styled.h1`
display:inline-block;
color:${props=>props.theme.text}
font-family:'Pacifico', cursive

position:fixed;
left:2rem;
top:2rem;
z-index:3;

`

const Logo = () => {
  return (
    <LogoStyle>Aydan</LogoStyle>
  )
}

export default Logo