import React ,{ useState}from "react";
import styled from "styled-components";
import Button from "../SubCompanents/Button";
import Logo from "../SubCompanents/Logo";
import Social from "../SubCompanents/Social";
import SingleBlog from './SingleBlog'

import BlogImg from "../assets/Images/blog.jpg";
import {motion} from 'framer-motion'


//Blog Container
const BlogContainer = styled(motion.div)`
  background-image: url(${BlogImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

//Container
const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.8)`};
  width: 100%;
  height: auto;
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
`
const container = {

  hidden: {opacity:0},
  show: {
    opacity:1,

    transition:{
     
      duration: 0.5,
    }
  }

}
const Blog = () => {
  const [numbers, setNumbers] = useState(0);

 
  return (
    <BlogContainer
    variants={container} initial='hidden' animate='show'
    exit={{opacity: 0, transition:{duration:0.5}}}
    >
      <Container>
        <Logo />
        <Social />
        <Button />

        <Center>
          <Grid>
<SingleBlog/>
<SingleBlog/>
<SingleBlog/>
<SingleBlog/>
<SingleBlog/>
<SingleBlog/>
<SingleBlog/>
<SingleBlog/>
<SingleBlog/>
<SingleBlog/>
<SingleBlog/>
<SingleBlog/>
<SingleBlog/>
<SingleBlog/>
<SingleBlog/>
<SingleBlog/>
          </Grid>
        </Center>
      </Container>
    </BlogContainer>
  );
};

export default Blog;
