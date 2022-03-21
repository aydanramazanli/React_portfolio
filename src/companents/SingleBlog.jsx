import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { motion } from "framer-motion";
import example from "../assets/Images/images.jpg";


const Single = styled(motion(Link))`
width: calc(10rem + 15 wv);
text-decoration: none;
height: 17rem;
padding:1rem;
border: 2px solid ${(props) => props.theme.text};
backdrop-filter:blur(2px);
box-shadow:0 0 1rem 0 rgba(0,0,0,0.2)
display:flex;
flex-direction:column;
cursor:pointer;
z-index:3;

&:hover{
    color: ${(props) => props.theme.body};
    background:${(props) => props.theme.text};
    transition:all 0.6s ease;
}


`;
const Image = styled.div`
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;
  color: ${(props) => props.theme.text};

  ${Single}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }
`;

const Img = styled.img`
object-fit: cover;
    height: 100%;
    width: 100%;
`
const Title = styled.h2`
  color: inherit;
  padding: 0.5rem 0;
  padding: 1rem 0;
  font-family: "" sans-serif;
  font-weight: bold;
  cursor: pointer;
  border-bottom: 1px solid grey;
  @media (max-width: 900px) {
  font-size:10px;
   };
`;
const Date = styled.span`
`;
const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};


const SingleBlog = ({title,guid,pubDate,thumbnail}) => {
  
  return (
    
    <Single to={{pathname:guid}} target="_blank" variants={Item}>
      <Image >
        <Img 
        src={thumbnail ||example} />
      </Image>
      <Title>
       {title}
      </Title> 
      <br/>
      <Date>{pubDate}</Date>
    </Single>
  );
};

export default SingleBlog;
