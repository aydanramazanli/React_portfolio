import React from "react";
import styled, { ThemeProvider } from "styled-components";
import {Link} from 'react-router-dom'
import Social from "../SubCompanents/Social";
import Button from "../SubCompanents/Button";
import Logo from "../SubCompanents/Logo";
import Title from "../SubCompanents/Title";
import { Light } from "./DarkMood";
import { Develope } from "./Svgs";
import galaxy from "../assets/Images/stars.jpg";

const Box = styled.div`
  background: url(${galaxy});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.body};
  padding: 2rem;
  width: 40vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

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

const Skills = () => {
  return (
    <ThemeProvider theme={Light}>
      <Box>
        <Logo theme="dark" />
        <Social theme="dark" />
        <Button />

        <Main>
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

            <strong>Tools</strong>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
              porro qui rerum veniam.
            </p>
          </Description>
        </Main>
        <Main>

  <SubTitle>
    <Develope width={40} height={40}></Develope>
    Aydan Samedova
  </SubTitle>

  <Description>
    <strong>Front end developer</strong>
    <Link href="/uploads/media/default/0001/01/540cb75550adf33f281f29132dddd14fded85bfc.pdf">example</Link>
  </Description>
</Main>;
      </Box>
    </ThemeProvider>
  );
};


export default Skills;