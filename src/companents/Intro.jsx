import React from 'react'
import styled from 'styled-components'
import Me from '../assets/Images/me.jpg'



const IntroBox=styled.div`
z-index:3;
position:absolute;
left:50%;
top:50%;
transform:translate(-50%, -50%);
width:55vw;
height: 55vh;
display:flex;
background-image: 
background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};
`

const Box =styled.div`
width:50%;
position:relative;
display:flex;

.pic{
    position:absolute;
    bottom:0;
    left:50%;
    transform:translate(-50%, 0%);
    width:100%;
    height:auto;
}
`
const Text= styled.div`
font-size:calc(1em+1vw);
color:${props => props.theme.body};;
padding:2rem;
cursor:pointer;
display:flex;
flex-direction:column;
justify-content:space-evenly;

&>*:last-child{
    color: ${props => `rgba(${props.theme.bodyRgba},0.6)` };
    font-size: calc(0.5rem + 1.5vw);
    font-weight:300;
}
`


const Intro = () => {
  return (
    <IntroBox>
         <Box>
                <Text>
                    <h1>Hi,</h1>
                    <h3>I'm Aydan.</h3>
                    <h6>I'm Front end Developer.</h6>
                </Text>
            </Box>
            <Box>
                <div
                initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{ duration:1, delay:2 }}
                >
                    <img className="pic" src={Me} alt="Profile Pic" style={{width:"250px", height:"250px"}} />
                </div>
            </Box>
    </IntroBox>
  )
}

export default Intro