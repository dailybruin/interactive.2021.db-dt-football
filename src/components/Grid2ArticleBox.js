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
font-family: 'Open Sans Condensed', sans-serif;
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
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  border-left-width: 7px;
  border-left-style: solid;
  border-left-color: ${(props) => props.color};
  /* position: relative; */
`;

export default function ArticleBox(props) {
    let color = props.color;
    let image = props.image;
    return (
        <Box> 
            <Text>
                <News> This thing happened to these football players today this thing happened to these football players today </News>
                <Author> Author Name </Author>
            </Text>
            <Image color={color} image = {image} src="" alt=""/>
        </Box>
    );
}