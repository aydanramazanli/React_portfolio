import React from "react";
import styled from "styled-components";
import Button from '../SubCompanents/Button'
import Logo from '../SubCompanents/Logo'
import Social from '../SubCompanents/Social'
import {Link} from 'react-router-dom'


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
z-index: 1;
`
//Blog
const Blog = styled(Link)`
color: ${props=>props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform:translate(-50%, -50%);
transform:rotate(90deg);
text-decoration: none;
z-index: 1;
`
//Work
const Work = styled(Link)`
color: ${props=>props.theme.text};
position: absolute;
top: 50%;
left: 1rem;
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
color: ${props=>props.theme.text};
text-decoration: none;
z-index: 1;
`
//Skills
const Skills= styled(Link)`
color: ${props=>props.theme.text};
text-decoration: none;
z-index: 1;
`



const Main = () => {
  return (
    <MainContainer>
      <Container>
        <Button/>
        <Logo/>
        <Social/>
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
        <Work  to='/works'>
          <h3>
            Works
          </h3>
        </Work>
        <BottomBar >
          <About to='/about'>
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
    </MainContainer>
  );
};

export default Main;
