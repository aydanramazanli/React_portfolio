import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Light } from "./companents/DarkMood";
import { AnimatePresence } from "framer-motion";
import Global from "./GlobalStyle";
//companents
import Main from "./companents/Main";
import Blog from "./companents/Blog";
import About from "./companents/About";
import Projects from "./companents/Projects";
import Loading from "./SubCompanents/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();


  
useEffect(()=>{
  setTimeout(() => {
    setIsLoading(true);
  },2000)

})


  return (
    <>
      <Global />
      <ThemeProvider theme={Light}>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact>
              {isLoading ?  <Main />: <Loading /> }
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>

            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
          </Switch>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
