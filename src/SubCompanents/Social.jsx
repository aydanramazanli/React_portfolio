import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Github, Facebook, Medium, Linkedin } from "../companents/Svgs";
import { Dark } from "../companents/DarkMood";

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 2rem;
  bottom: 0;
  z-index: 3;
  color: #000;

  & > *:not(:last-child) {
    margin: 0.3rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  background-color: ${(props) =>
    props.color === "dark" ? Dark.text : Dark.body};
`;
const Social = (props) => {
  return (
    <Icon>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1.1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <Link
          to={{ pathname: "https://github.com/aydanramazanli" }}
          target="_blank"
        >
          <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? Dark.text : Dark.body}
          />
        </Link>
      </motion.div>

      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1.1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <Link
          to={{
            pathname: "https://www.linkedin.com/in/aydan-ramazanli-6a8628196/",
          }}
          target="_blank"
        >
          <Linkedin
            width={25}
            height={25}
            fill={props.theme === "dark" ? Dark.text : Dark.body}
          />
        </Link>
      </motion.div>

      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1.1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <Link
          to={{
            pathname: "https://www.facebook.com/profile.php?id=100004080731564",
          }}
          target="_blank"
        >
          <Facebook
            width={25}
            height={25}
            fill={props.theme === "dark" ? Dark.text : Dark.body}
          />
        </Link>
      </motion.div>

      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1.1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <Link
          to={{ pathname: "https://medium.com/@aydan2903" }}
          target="_blank"
          style={{ color: Dark.text }}
        >
          <Medium
            width={25}
            height={25}
            fill={props.theme === "dark" ? Dark.text : Dark.body}
          />
        </Link>
      </motion.div>

      <Line
        initial={{
          height: 0,
        }}
        animate={{
          height: "7rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
        color={props.theme}
      />
    </Icon>
  );
};

export default Social;
