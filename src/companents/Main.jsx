import React , {useState}from "react";
import styled, {keyframes} from "styled-components";
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import Button from '../SubCompanents/Button'
import Logo from '../SubCompanents/Logo'
import Social from '../SubCompanents/Social'
import Intro from './Intro'
import Sound from '../SubCompanents/Sound'
import {YinYang} from './Svgs'




//Main Container
const MainContainer = styled.div`
  background:  ${props=>props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Lato", sans-serif;
    font-weight: 400;
  }
`;

//Container
const Container = styled.div`
  padding: 2rem;
`;

//Contact
const Contact = styled(Link)`
color: ${props=>props.theme.text};
position: absolute;
top: 3rem;
right: calc(1rem + 2vw);
text-decoration: none;
font-weight:bold;
z-index: 1;
`
//Blog
const Blog = styled(Link)`
color: ${props=>props.theme.text};
position: absolute;
top: 50%;
font-weight:bold;
right: calc(1rem + 2vw);
transform:translate(-50%, -50%);
transform:rotate(90deg);
text-decoration: none;
z-index: 1;
`
//Work
const Projects = styled(Link)`
color: ${props=>props.click ? props.theme.body: props.theme.text};
position: absolute;
top: 50%;
left: 1rem;
font-weight:bold;
transform:translate(-50%, -50%);
transform:rotate(-90deg);
text-decoration: none;
z-index: 1;
`

//Bottom Bar
const BottomBar = styled(Link)`
position: absolute;
bottom: 1rem;
left: 0;
right:0;
width:100%;
display:flex;
justify-content: space-evenly;
`

//About
const About= styled(Link)`
text-decoration: none;
z-index: 1;
font-weight:700;

`
const Ab = styled.h3`
color: ${props=>props.click ? props.theme.body: props.theme.text};
`


 

//animate ying yang
const rotate=keyframes`
from{
  transform :rotate(0)
}
to{
  transform:rotate(360deg)
}
`
//Center
const Center = styled.button`
position:absolute;
top:${props=>props.click? '85%' : '50%'};
left:${props=>props.click? '90%' : '50%'};
transform:translate(-50%, -50%);
border:none;
outline:none;
transition:all 2s ease;
display: flex;
flex-direction:column;
justify-content: center;
align-items:center;
z-index: 10;

&>:first-child{
  animation:${rotate} infinite 1.5s linear;
}


`

// main dark side
const DarkMood = styled.div`
position:absolute;
background: ${(props) => props.theme.text};
top: 0;
bottom: 0;
right: 50%;
width: ${props=>props.click? '50%' : '0'};
height: ${props=>props.click? '100%' : '0'};
transition: height 0.5s ease, width 1s ease 0.5s;
z-index: 1;
`


const Main = () => {
  const [click,setClick] =useState(false)

  const clickButton=()=>{
    setClick(!click)
  }
  
  return (
    <MainContainer>
       <DarkMood click={click}/>
      <Container>
    
        <Button/>
        <Sound theme ={click? 'dark' : 'light'} />
        <Logo theme ={click? 'dark' : 'light'}/>
        <Social theme ={click? 'dark' : 'light'} />
    
        <Center click={click}>
           <YinYang onClick={()=>clickButton()} width={click? 150 : 200}  height={click? 150 :200} fill='currentColor'/> 
        </Center>
        <Contact target="_blank" to={{pathname:"mailto:aydansamedva@gmail.com"}}>
          <motion.h3 style={{fontWeight:"bold"}}
          whileHover={{scale:1.1}}
          whileTap={{ rotate: 90, scale: 0.75 }}
          initial={{
            y: -200,
            transition :{type:'spring', duration:1.5, delay:1}
          }}
          animate={{
            y: 0,
            transition :{type:'spring', duration:1.5, delay:1}
          }}
          >
            Contact with me...
          </motion.h3>
        </Contact>
        <Blog  to='/blog'>
          <motion.h3  style={{fontWeight:"bold"}} 
            initial={{
              x: -200,
              transition :{type:'spring', duration:1.5, delay:1}
            }}
            animate={{
              x: 0,
              transition :{type:'spring', duration:1.5, delay:1}
            }}
          whileHover={{scale:1.3}} whileTap={{ rotate: -90, scale: 0.75 }}>
            Blog
          </motion.h3>
        </Blog>
        <Projects  to='/projects'  click={click} >
          <motion.h3  style={{fontWeight:"bold"}} 
          initial={{
            x: -200,
            transition :{type:'spring', duration:1.5, delay:1}
          }}
          animate={{
            x: 0,
            transition :{type:'spring', duration:1.5, delay:1}
          }}
             whileHover={{scale:1.3}}  whileTap={{ rotate: 90, scale: 0.75 }}>
            Projects
          </motion.h3>
        </Projects>
        <BottomBar >
        
          <About to='/about'>
          <motion.h3 style={{fontWeight:"bold"}}  initial={{
              x: -200,
              transition :{type:'spring', duration:1.5, delay:1}
            }}
            animate={{
              x: 0,
              transition :{type:'spring', duration:1.5, delay:1}
            }} whileHover={{scale:1.3}}  whileTap={{ rotate: 90, scale: 0.75 }}>
              <Ab click={click} style={{fontWeight:"bold"}}>Ab</Ab>
              <span>out</span>
            
          </motion.h3>
          </About>
        
        </BottomBar>
      </Container>
      {click ? <Intro  click={click} />:null}
    </MainContainer>
  );
};

export default Main;

