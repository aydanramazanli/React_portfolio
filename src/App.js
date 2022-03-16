import React from 'react';
import './App.css';
import { Switch, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Light} from './companents/DarkMood';
import {AnimatePresence} from 'framer-motion'
import Global from './GlobalStyle';
//companents
import Main from './companents/Main'
import About from './companents/About'
import Blog from './companents/Blog'
import Skills from './companents/Skills'
import Projects from './companents/Projects'


function App() {
  const Location=useLocation()
  return (
    <>
    <Global/>
    <ThemeProvider theme={Light}>


<AnimatePresence exitBeforeEnter>
<Switch location={location} key={location.pathname}>
       <Route path="/" exact>
         <Main/>
       </Route>
       <Route path="/blog">
         <Blog/>
       </Route>
       <Route path="/about">
         <About/>
       </Route>
       <Route path="/skills">
         <Skills/>
       </Route>
       <Route path="/projects">
         <Projects/>
       </Route>

      </Switch>
  
</AnimatePresence>

     
    </ThemeProvider>
 
    </>
  );
}

export default App;
