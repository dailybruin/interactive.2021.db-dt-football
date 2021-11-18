import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const Box = styled.div`
display: flex;
flex-direction: row;
height: 95%;
width: 85%;
justify-content: center;
align-items: center;
`;

const Text = styled.div`
flex: 1 280px;
`;

const News = styled.div`
font-family: 'Raleway', sans-serif;
padding: 10px;
`;

const Author = styled.div`
font-family: 'Press Start 2P', cursive;
padding: 10px;
`;

const Image = styled.div`
  flex: 1 330px;
  height: 100%;
  object-fit: cover;
  background-image: url(${"https://ca-times.brightspotcdn.com/dims4/default/816b63e/2147483647/strip/true/crop/2048x1389+0+0/resize/1486x1008!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fd9%2F52%2Ff91bd6b43d1df750bb910d6f7919%2Fla-sp-usc-vs-ucla-20181117-pictures-001"});
  background-position: center;
  background-size: cover;
  border-left-width: 7px;
  border-left-style: solid;
  border-left-color: ${(props) => props.color};
  /* position: relative; */
`;

export default function ArticleBox(props) {
    let color = props.color;
    return (
        <Box> 
            <Text>
                <News> This thing happened to these football players today this thing happened to these football players today </News>
                <Author> Author Name </Author>
            </Text>
            <Image color={color} src="" alt=""/>
        </Box>
    );
}