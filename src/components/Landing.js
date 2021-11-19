import React, { useState, useRef, useCallback } from "react";
import styled from 'styled-components';
import { mediaQueries } from "../shared/config";


const Credits = styled("div")`
  position: absolute;
  bottom: 20px;
  right: 50px;
  color: black;
  font-weight: bold;
  font-family: 'Open Sans Condensed', sans-serif;
  ${mediaQueries.tablet} {
      right: 20px;
      font-size: 12px;
  }
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
  background-image: url(${(props) => props.src});
`;


export default function Landing(props) 
{

    const media = window.matchMedia('(max-width: 450px)');
    const [isMobile, setIsMobile] = useState(media.matches);
    media.addEventListener('change', () => {
    if (media.matches !== isMobile) {
        setIsMobile(media.matches);
    }
    });
    console.log(props.data.landing_gif)
    return (
      <>
        <Box>
            {!isMobile && <Gif src={props.data.landing_gif}/>}
            {isMobile && <Gif src={props.data.mobile_landing_gif}/>}
        </Box>
      </>
    )
}

