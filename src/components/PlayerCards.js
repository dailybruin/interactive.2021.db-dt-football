import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const Box = styled.div`
/* height: 100%; */
width: 95%;
justify-self: center;
padding: 10px;
grid-area: ${(props) => props.direction};
display: flex;
flex-direction: row-reverse;
`;

const Image = styled.div`
  height: 291px;
  width: 328px;
  object-fit: cover;
  background-image: url(${"https://saturdayblitz.com/wp-content/uploads/imagn-images/2017/07/15337202.jpeg"});
  background-position: center;
  background-size: cover;
  border-left: 10px solid;
  border-left-color: ${(props) => props.color};
`;

const Text = styled.div`
background-color: white;
height: 291px;
width: 283px;
text-align: left;
padding-top: 61px;
padding-left: 30px;
padding-right: 30px;
`;

const Body = styled.div`
color: black;
padding-bottom: 30px;
font-family: "Open Sans Condensed";
font-weight: normal;
font-size: 24px;
`;

const AuthorName = styled.div`
color: black;
padding-bottom: 60px;
font-family: 'Press Start 2P', cursive;
font-weight: normal;
font-size: 12px;
`;

export default function PlayerCards(props) {
    let dir = props.direction;
    let color = props.color;
    return (
        <Box direction = {dir}> 
            <Image src="" alt="" color = {color}/>
            <Text>
              <Body> 
              This thing happened to these football players today this thing happened to these football players today
                </Body>
              <AuthorName> Author Name </AuthorName>
            </Text>
          </Box>
      );
}