import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import Social from "../SubCompanents/Social";
import { motion } from "framer-motion";
import Button from "../SubCompanents/Button";
import Logo from "../SubCompanents/Logo";
import Title from "../SubCompanents/Title";
import { Light } from "./DarkMood";
import { Develope, Cv } from "./Svgs";
//import Documents from "../SubCompanents/Documents";
import { Document, Page} from 'react-pdf/dist/esm/entry.webpack'
import cv from '../assets/documents/Aydan Samedova- front end developer .pdf'
import { pdfjs } from 'react-pdf';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;



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
`;

const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.body};
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
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transition: all 0.4s ease;
  }
`;

const MainCV = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.body};
  padding: 2rem;
  width: 25%;
  height: 55vh;
  border-radius: 10px;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  flex-direction: column;

  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transition: all 0.4s ease;
  }
`;
const SubTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
      transition: all 0.4s ease;
    }
  }
  & > *:first-child {
    margin-right: 1rem;
  }
`;
const Description = styled.h3`
  color: ${(props) => props.theme.text};
  font-size: calc(0.3em + 1vw);
  padding: 0.5rem 0;
  text-align: center;

  ${Main}:hover & {
    & > * {
      color: ${(props) => props.theme.body};
      transition: all 0.4s ease;
    }
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  p {
    margin-left: 2rem;
  }
`;

const Links = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};
const Skills = () => {

  return (
    <ThemeProvider theme={Light}>
      <Box>
        <Logo theme="dark" />
        <Social theme="dark" />
        <Button />
        <Main
          variants={container}
          initial="hidden"
          animate="show"
          transition={{ type: "spring", duration: 1, delay: 1.2 }}
        >
          <Title text="Skills" top="10%" left="5%" />
          <SubTitle>
            <Develope width={40} height={40}></Develope>
            Front end Developer
          </SubTitle>

          <Description>
            <strong>Skills</strong>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
              porro qui rerum veniam.
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
              porro qui rerum veniam.
            </p>
          </Description>
        </Main>
        <MainCV
          variants={container}
          initial="hidden"
          animate="show"
          transition={{ type: "spring", duration: 1, delay: 1.4 }}
        >
          <SubTitle>Aydan Samedova</SubTitle>
          {/* <Links >
         
         <h3 style={{ margin: "15px " }}>Downlade CV</h3>
         <Cv width={100} height={100} />
        
       </Links>   */}

        </MainCV>
      </Box>
    </ThemeProvider>
  );
};
export default Skills;