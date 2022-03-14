import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {Dark} from './DarkMood';
import {motion} from 'framer-motion'
import Logo from '../SubCompanents/Logo'
import Button from '../SubCompanents/Button'
import Social from '../SubCompanents/Social'
//import ParticleComponent from '../subComponents/ParticleComponent';
import Title from '../SubCompanents/Title'
import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
z-index:10;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;

  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`




const AboutPage = () => {
    return (
        <ThemeProvider theme={Dark}>
<Box>
<Button/>
<Logo theme='dark'/>
<Social theme='dark'/>
<div />
<div theme='dark' />

        <Spaceman>
            <motion.img src={astronaut} alt="spaceman"  drag/>
        </Spaceman>    
        <Main>
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quibusdam id ea modi autem voluptas hic sunt debitis non ex.
        </Main>

        <Title text="ABOUT" top="10%" left="5%" />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage