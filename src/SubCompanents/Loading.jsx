import React from 'react'
import styled from 'styled-components';


const LoadingGif = styled.div`
width:100%;
height:100vh;
background:black;
color:white;
display:flex;
align-items:center;
justify-content:center;
`

const Text = styled.h1`
font-size:24px;
font-weight:bold;
text-align:center;
width:100%;

`

const Loading = () => {
  return (
  <LoadingGif>
   <Text>Loading...</Text>
  </LoadingGif>
  )
}

export default Loading