import React from 'react'
import styled from 'styled-components'
import Me from '../assets/Images/me.jpg'
import {motion} from 'framer-motion'




const IntroBox=styled(motion.div)`
z-index:3;
position:absolute;
left:50%;
top:50%;
transform:translate(-50%, -50%);
width:55vw;

display:flex;

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
color:${props => props.theme.body};
padding:2rem;
cursor:pointer;
display:flex;
flex-direction:column;
justify-content:space-evenly;

&>*:last-child{
    font-size: calc(0.5rem + 1.5vw);
    font-weight:300;
}
`


const Intro = () => {
  return (
    <IntroBox 
    initial={{height:0}}
    animate={{height:"42vh"}}
    transition={{ duration:1, delay:1}}
    
    >
         <Box>
                <Text>
                    <h1>Hi,</h1>
                    <h3>I'm Aydan.</h3>
                    <h6>I'm Front end Developer.</h6>
                </Text>
            </Box>
            <Box>
                <div
              
                >
                    <img className="pic" src={Me} alt="Profile Pic" style={{width:"100%", height:"100%", objectFit:"cover"}} />
                </div>
            </Box>
    </IntroBox>
  )
}
export default Intro