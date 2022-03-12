import React , {useState}from "react";
import styled, {keyframes} from "styled-components";
import Button from '../SubCompanents/Button'
import Logo from '../SubCompanents/Logo'
import Social from '../SubCompanents/Social'
import Intro from './Intro'
import {Link} from 'react-router-dom'
import {YinYang} from './Svgs'



//Main Container
const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
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
top: 2rem;
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
const Work = styled(Link)`
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
const About = styled(Link)`
color: ${props=>props.click ? props.theme.body: props.theme.text};
text-decoration: none;
z-index: 1;
font-weight:700;
`
//Skills
const Skills= styled(Link)`
color: ${props=>props.theme.text};
text-decoration: none;
z-index: 1;
font-weight:700;
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
background-color:transparent;
transition:all 2s ease;
display: flex;
flex-direction:column;
justify-content: center;
align-items:center;

&>:first-child{
  animation:${rotate} infinite 1.5s linear;
}

&>:last-child{
  display:${props=>props.click? 'none' : 'block'};
  padding-top:1rem;
}
`

// main dark side
const DarkMood = styled.div`
position:absolute;
background:black;
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
        <Logo theme ={click? 'dark' : 'light'}/>
        <Social theme ={click? 'dark' : 'light'} />
       
        <Center click={click}>
           <YinYang onClick={()=>clickButton()} width={click? 150 : 200}  height={click? 150 :200} fill='currentColor'/> 
          <span>Click Here</span>
        </Center>
        <Contact target="_blank" to={{pathname:"mailto:aydansamedva@gmail.com"}}>
          <h3>
            contact with me...
          </h3>
        </Contact>
        <Blog  to='/blog'>
          <h3>
            Blog
          </h3>
        </Blog>
        <Work  to='/works'  click={click}>
          <h3>
            Works
          </h3>
        </Work>
        <BottomBar >
          <About to='/about' click={click}>
          <h3>
           About.
          </h3>
          </About>
          <Skills to='/skills'>
          <h3>
          My Skills.
          </h3>
          </Skills>
        
        </BottomBar>
      </Container>
      {click ? <Intro  click={click} />:null}
    </MainContainer>
  );
};

export default Main;
