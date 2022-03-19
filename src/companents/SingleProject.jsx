import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Github } from '../companents/Svgs'
import { Dark } from "../companents/DarkMood";



const Box = styled(motion.li)`
width: 18rem;
height: 50vh;
background-color: ${props => props.theme.text};
color:${props => props.theme.body};
padding: 1.5rem 2rem;
margin-right: 8rem;
border-radius: 0 50px 0 50px;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid ${props => props.theme.body};
transition: all 0.2s ease;

&:hover{
background-color: ${props => props.theme.body};
color:${props => props.theme.text};
border: 1px solid ${props => props.theme.text};
}
`
const Title = styled.h2`
font-size: calc(1em + 0.5vw);
`
const Description = styled.h2`
font-size: calc(0.8em + 0.3vw);
font-weight: 500;
`
const Footer = styled.footer`
border-top: 2px solid ${props =>props.theme.body};
padding-top:1rem;
display: flex;
justify-content: space-between;

${Box}:hover &{
    border-color: ${props =>props.theme.text};
   
}
`
const Links = styled(Link)`
background-color: ${props =>props.theme.body};
color: ${props =>props.theme.text};
text-decoration: none;
display:flex;
justify-content: center;
width:100%;
padding:1rem 1.5rem;
border-radius: 0 0 0 50px;
font-size:16px;
align-items:center;
${Box}:hover &{
    background-color: ${props =>props.theme.text};
    color: ${props =>props.theme.body};
    font-size:bold;
}
`
const Item = {
    hidden:{
        scale:0
    },
    show:{
        scale:1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}


const SingleProject = ({ name,description, github}) => {
 
  return (
    <div>

<Box  variants={Item}>
            <Title>{name}</Title>
            <Description>
              {description}
            </Description>
          
            <Footer>
                <Links to={{pathname:github}} target="_blank"
>
             
                 visit code
                </Links>
                
            </Footer>
        </Box>
    </div>
  )
}

export default SingleProject