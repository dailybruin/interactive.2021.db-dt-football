import React from 'react';
import styled from 'styled-components';



const Credits = styled("div")`
  position: absolute;
  bottom: 20px;
  right: 50px;
  color: black;
  font-weight: bold;
`;


const Box = styled("div")`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  background-position: center;
  background-size: cover;
  position: relative;
`;

const Gif = styled("div")`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  background-position: center;
  background-size: cover;
  position: relative;
  background-image: url("https://endlessicons.com/wp-content/uploads/2012/11/image-holder-icon-614x460.png");
`;


export default function Landing(props) 
{
    return (
        <Box>
            <Gif/>
            <Credits>CREDITS HERE</Credits>
        </Box>
        

    )
}

