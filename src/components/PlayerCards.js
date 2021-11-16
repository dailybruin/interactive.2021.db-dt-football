import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const Box = styled.div`
/* height: 100%; */
width: 80%;
justify-self: center;
padding: 10px;
grid-area: ${(props) => props.direction};
`;

const Image = styled.div`
  height: 400px;
  object-fit: cover;
  background-image: url(${"https://saturdayblitz.com/wp-content/uploads/imagn-images/2017/07/15337202.jpeg"});
  background-position: center;
  background-size: cover;
  border-left: 10px solid #C31F1F;
`;

const Text = styled.div`
background-color: grey;
color: black;
/* padding-top: 20px; */
padding-bottom: 10px;
`;

const Body = styled.div`
background-color: grey;
color: black;
font-family: 'Franklin Gothic Medium';
padding-left: 30px;
padding-right: 30px;
padding-top: 61px;
padding-bottom: 42px;
font-family: "Gotham Condensed";
`;

const AuthorName = styled.div`
background-color: grey;
color: black;
font-size: 30px;
text-align: left;
padding-left: 30px;
padding-right: 121px;
padding-bottom: 60px;

`;

export default function PlayerCards(props) {
    let dir = props.direction;
    return (
        <Box direction = {dir}> 
            <Image src="" alt=""/>
              <Text>
                <Body> 
                This thing happened to these football players today 
                this thing happened to these football players today
                 </Body>
                <AuthorName> Author Name </AuthorName>
              </Text>
          </Box>
      );
}