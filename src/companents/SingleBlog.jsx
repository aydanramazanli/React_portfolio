import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import example from '../assets/Images/spaceman.png'

const  Single= styled(motion(Link))`
width: calc(10rem + 15 wv);
text-decoration: none;
height: 20rem;
padding:1rem;
border: 2px solid ${props=>props.theme.text};
backdrop-filter:blur(2px);
box-shadow:0 0 1rem 0 rgba(0,0,0,0.2)
display:flex;
flex-direction:column;
cursor:pointer;
z-index:3;

&:hover{
    color: ${props=>props.theme.body};
    background:${props=>props.theme.text};
    transition:all 0.6s ease;
}


`
const Image= styled.div`
background:url(${example});
width:100%;
height:60%;
background-size:cover;
border:1px solid transparent;
background-position:center center;
color:${props=>props.theme.text};

${Single}:hover &{
    border:1px solid ${props=>props.theme.body};

}


`
const Title = styled.h2`
color:inherit;
padding: 0.5rem 0;
padding-top:1rem;
font-family:'' sans-serif;
font-weight:bold;
cursor:pointer;
border-bottom: 1px solid grey;
`

const Date= styled.span`
padding-right: 0.5rem;
margin-bottom:0.5rem;
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


const SingleBlog = () => {
    //api name tags date img link=blog
  return (


          <Single to='/' target='_blank'
             variants={Item}>
    <Image />
    <Title>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque tenetur possimus magni.
    </Title>
    
    <Date>
        03.03.2022
    </Date>
    </Single>

  
  )
}

export default SingleBlog