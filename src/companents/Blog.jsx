import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ReactCanvasNest from 'react-canvas-nest';
import Button from "../SubCompanents/Button";
import Logo from "../SubCompanents/Logo";
import Social from "../SubCompanents/Social";
import SingleBlog from "./SingleBlog";
import { motion } from "framer-motion";
import nextId from "react-id-generator";
import Loading from "../SubCompanents/Loading";



//Blog Container
const BlogContainer = styled(motion.div)`
    background-color: ${(props) => props.theme.body};
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height:auto;
  width:100%;
  background-position: center;
`;

//Container
const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.8)`};
  width: 100%;

   height:auto;
  position: relative;
`;

//center

const Center = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  padding: 5rem 13rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, minmax(calc(10rem + 30vw), 1fr));
    margin-top:1rem;
   };
`;
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      duration: 0.5,
    },
  },
};

const Blog = () => {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    },1500)
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aydan2903"
    )
      .then((data) => data.json())
      .then((item) => setDatas(item.items));
   

  }, []);

  return (
    <>
    {
      isLoading ? 
      (
        <>
        <ReactCanvasNest className = 'canvasNest' config = {{ pointColor: ' 128, 128, 128 ' }} style = {{ zIndex: 1, backgroundColor:"#C0C0C0"}} />
<BlogContainer
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
     
        <Container>
          <Logo />
          <Social />
          <Button />

    <Center>
    <Grid>
     {  datas.map((e) => {
            return <SingleBlog {...e} key={nextId()} />;
          })
       }
    </Grid>
  </Center>
   
 
        
        </Container>
      
    </BlogContainer>
    </>
    ): <Loading/>
     
          }

 </> );
};

export default Blog;
