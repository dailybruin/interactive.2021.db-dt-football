import React, { useState, useEffect } from "react";
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
  background-image: url("https://endlessicons.com/wp-content/uploads/2012/11/image-holder-icon-614x460.png");
`;


export default function Landing(props) 
{
    // const media = window.matchMedia('(max-width: 450px)');
    // const [isMobile, setIsMobile] = useState(media.matches);
    // media.addEventListener('change', () => {
    // if (media.matches !== isMobile) {
    //     setIsMobile(media.matches);
    // }
    // });
    return (
        <Box>
            <Gif/>
            <Credits>{props.creds}</Credits>
        </Box>
        

    )
}

