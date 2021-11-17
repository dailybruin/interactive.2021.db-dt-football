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
  background-image: url(${"https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg"});
  background-position: center;
  background-size: cover;
  broder-left-width: 1px;
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