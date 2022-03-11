import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'
import {HomeButton} from '../companents/Svgs'


const MainButton = styled.button`
position:fixed;
top:2rem;
left:50%;
transform:translate(-50%, 0)

background-color:#FCF6F4;
padding:0.3rem;
border-radius:50%;
border:1px solid #000;
width:2.5rem;
height:2.5rem;

display: flex;
align-items: center;
justify-content: center;
z-index:3;
cursor:pointer;

&:hover
{background-color: rgba(255, 0, 0, 0.2);
box-shadow: 0 0 8px 6px rgba(255, 0, 0,0.4);}
`;

const Button = () => {
  return (
    <MainButton>
      <Link to='/'>
      <HomeButton width={30} height={30} fill='curretColor'/>
      </Link>
    </MainButton>
  );
};

export default Button;
