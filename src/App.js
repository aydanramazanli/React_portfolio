import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Light} from './companents/DarkMood';
import Global from './GlobalStyle';
//companents
import Main from './companents/Main'
import About from './companents/About'
import Blog from './companents/Blog'
import Skills from './companents/Skills'
import Works from './companents/Works'

function App() {
  return (
    <>
    <Global/>
    <ThemeProvider theme={Light}>
      <Switch>
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
       <Route path="/works">
         <Works/>
       </Route>

      </Switch>
  
    </ThemeProvider>
 
    </>
  );
}

export default App;
