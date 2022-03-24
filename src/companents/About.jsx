import React from "react";
import styled, { ThemeProvider } from "styled-components";
import ReactCanvasNest from 'react-canvas-nest';
import Social from "../SubCompanents/Social";
import { motion } from "framer-motion";
import Button from "../SubCompanents/Button";
import Logo from "../SubCompanents/Logo";
import Title from "../SubCompanents/Title";
import { Light } from "./DarkMood";
import { Develope} from "./Svgs";
import cv from '../assets/Images/Screenshot_1.png'




const Box = styled.div`
  background: ${(props) => props.theme.text};
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 900px) {
    align-items:center;justify-content:center;
   flex-direction: column;
   };
`;
const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.body};
  color: ${(props) => props.theme.body};
  background: transparent;
  padding: 2rem;
  width: 45%;
  height: 55vh;
  border-radius: 10px;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  flex-direction: column;

  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.body};
    transition: all 0.4s ease;
  }
  @media (max-width: 900px) {
    width: 65%;
    height: auto;
    padding: 1rem;
    margin-bottom:2rem;
    };
  
`;
const SubTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.text};
      transition: all 0.4s ease;
    }
  }
  & > *:first-child {
    margin-right: 1rem;
   
  }
  @media (max-width: 900px) {
    font-size: calc(0.8em + 1vw);

    };
`;
const Description = styled.h3`
  color: ${(props) => props.theme.body};
  font-size: calc(0.5em + 1vw);
  padding: 0.5rem 0;
  text-align: center;

  ${Main}:hover & {
    & > * {
      color: ${(props) => props.theme.text};
      transition: all 0.4s ease;
    }
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  p {
    margin-left: 2rem;
    @media (max-width: 900px) {
      margin:0;
    
        };
  }
`;


const MainCV = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.body};
  color: ${(props) => props.theme.body};
  background: transparent;
  padding: 1rem 2rem;
  width: 25%;
  height: 55vh;
  border-radius: 10px;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  flex-direction: column;

  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.body};
    transition: all 0.4s ease;
  }
  @media (max-width: 900px) {

  height:40%;
  width:65%;
  padding:1rem;
      };
`;
const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
border-radius:10px;
`
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

const About = () => {
  return (
    <ThemeProvider theme={Light}>
      <Box>
        <Logo theme="dark" />
        <Social theme="dark" />
        <Button />
        <ReactCanvasNest className = 'canvasNest' config = {{ pointColor: ' 128, 128, 128 ' }} style = {{ zIndex: 1, backgroundColor:"darkgrey"}} />
        <Main
          variants={container}
          initial="hidden"
          animate="show"
          transition={{ type: "spring", duration: 1, delay: 1.2 }}
        >
          <Title text="Skills" top="10%" left="5%" />
          <SubTitle>
            <Develope width={40} height={40}   fill={'gray'}></Develope>
            Front end Developer
          </SubTitle>

          <Description>
            <strong>Skills</strong>
            <p>
            Html, Css, Js, React, Redux, Sass, Bootstrap, TailwindCss, TypeScript,Framer-motion etc.
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>
             Visual Studio, Github, Git bash etc.
            </p>
          </Description>
        </Main>
        <MainCV
          variants={container}
          initial="hidden"
          animate="show"
          transition={{ type: "spring", duration: 1, delay: 1.4 }}
        >
       
        <Image src={cv}/>
      
        </MainCV>
        
      </Box>
    </ThemeProvider>
  );
};
export default About;