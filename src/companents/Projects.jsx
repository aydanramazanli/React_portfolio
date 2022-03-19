import React, {useRef, useEffect} from "react";
import styled, { ThemeProvider } from "styled-components";
import { Dark } from "./DarkMood";
import {YinYang} from './Svgs'
import {motion} from 'framer-motion'
import ReactCanvasNest from 'react-canvas-nest';
import Logo from "../SubCompanents/Logo";
import Button from "../SubCompanents/Button";
import Social from "../SubCompanents/Social";
import SingleProject from "./SingleProject";
import Title from '../SubCompanents/Title'
import {WorkData} from '../data/WorkData'
import nextId from "react-id-generator";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 400vh;
  position: relative;
  overflow: hidden;
`;

const Main = styled(motion.ul)`
position: fixed;
top: 12rem;
left:calc(10rem + 15vw);
height: 40vh;
display: flex;
color:white;
`
const Rotate = styled.span`
display:block;
position: fixed;
right:1rem;
bottom: 1rem;
width: 80px;
height: 80px;
z-index:1;
`
const container = {

  hidden: {opacity:0},
  show: {
    opacity:1,

    transition:{
      staggerChildren: 0.5,
      duration: 1,
    }
  }

}



const Projects = (theme) => {
console.log(theme)
const ref = useRef(null);
const yinyang = useRef(null);


useEffect(() => {
  let elem= ref.current

  const rotate= ()=>{
elem.style.transform= `translateX(${-window.pageYOffset}px)`


return (yinyang.current.style.transform =
  'rotate(' + -window.pageYOffset + 'deg)')



  }

  window.addEventListener('scroll', rotate)

  return()=>window.removeEventListener('scroll', rotate)
},[])



  return (
    <ThemeProvider theme={Dark}>
      <Box >
        <Button />
        <Logo theme="dark" />
        <Social theme="dark" />
        <ReactCanvasNest className = 'canvasNest' config = {{ pointColor: ' 255, 255, 255 ' }} style = {{ zIndex: 0}} />
<Main ref={ref} variants={container} initial='hidden' animate='show'>
  {WorkData.map(item=>{
    return(
      <SingleProject  id = {nextId()} {...item}/>
    )
  })}


</Main>
<Rotate ref={yinyang}>
    <YinYang width={80} height={80} fill={Dark.text} />
</Rotate>
<Title text="Projects" top='10%' right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default Projects;
