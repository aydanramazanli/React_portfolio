import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Github, Facebook } from "../companents/Svgs";
import LinkedinPng from "../assets/svg/icons8-linkedin-50.png";
import MediumPng from "../assets/svg/icons8-medium-monogram-50.png";

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 2rem;
  bottom: 0;
  z-index: 3;
  color: #000;

  &>*:not(:last-child){
    margin: 0.3rem 0;
}
`;

const Line = styled.span`
  width: 2px;
  height: 6rem;
  background-color: ${props => props.theme.text};
`;
const Social = () => {
  return (
 
      <Icon>
       
          <Link to={{pathname:"https://github.com/aydansamedova"}}  target='_blank' style={{color:"black"}}>
            <Github width={25} height={25} fill="currentColor"  />
          </Link>
     
   
          <Link  to={{pathname:"https://www.linkedin.com/in/aydan-samedova-6a8628196/"}} target='_blank'>
            <img src={LinkedinPng} width={25} height={25} alt="Linkedin"  />
          </Link>
      
          <Link to={{pathname:"https://www.facebook.com/profile.php?id=100004080731564"}} target='_blank' style={{color:"black"}}>
            <Facebook width={25} height={25} fill="currentColor" />
          </Link>
  
          <Link to={{pathname:"https://medium.com/@aydan2903"}} target='_blank'>
            <img src={MediumPng} width={25} height={25} alt="Linkedin" />
          </Link>
    
        <Line />
      </Icon>

    
  
  );
};

export default Social;
