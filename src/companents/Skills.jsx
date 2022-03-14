import React from 'react'
import styled, {ThemeProvider} from 'styled-components'
import Social from '../SubCompanents/Social'
import Button from '../SubCompanents/Button'
import Logo from '../SubCompanents/Logo'
import Title from '../SubCompanents/Title'
import {Light} from './DarkMood'
import { Develope } from './Svgs'


const Box = styled.div`
background-color:${props=>props.theme.body};
width:100vw;
height:100vh;position:relative;
display:flex;
justify-content:center;
align-items:center;
`

const Main = styled.div`
border: 2px solid ${props=>props.theme.text};
color:${props=>props.theme.text};
background:${props=>props.theme.body};
padding:2rem;
width:50vw;
height:60vh;
z-index:3;
line-height:1.5;
display:flex;
flex-direction:column;
justify-content:center;
cursor:pointer;

&:hover{
  color:${props=>props.theme.body};
  background-color:${props=>props.theme.text};
  transition: all 0.4s ease;
}


`
const SubTitle= styled.h2`
display:flex;
justify-content:center;
align-items: center;
font-size:calc(1em + 1vw);


${Main}:hover &{
  &>*{
      fill:${props => props.theme.body};
      transition: all 0.4s ease;
  }
}
&>*:first-child{
margin-right: 1rem;
}
`
const Description= styled.h3`
color:${props=>props.theme.text};
font-size:calc(0.6em + 1vw);
padding:0.5rem 0;

${Main}:hover &{
  &>*{
     color:${props => props.theme.body};
     transition: all 0.4s ease;
  }
}

strong{
  margin-bottom:1rem;
  text-transform:uppercase;
}

p{
  margin-left:2rem;
}

`

const Skills = () => {
  return (
    <ThemeProvider theme={Light}>

      <Box>
      <Logo theme='light'/>
        <Social theme='light'/>
        <Button />
   
        <Main>
        <Title text="Skills" top="10%" left="5%" />
<SubTitle>
  <Develope width={40} height={40}>
   
  </Develope>
  Front end Developer
</SubTitle>

<Description>
  <strong>Skills</strong>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus porro qui rerum veniam.</p>

<strong>Tools</strong>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus porro qui rerum veniam.</p>
</Description>
        </Main>
      </Box>
    </ThemeProvider>
  )
}

export default Skills