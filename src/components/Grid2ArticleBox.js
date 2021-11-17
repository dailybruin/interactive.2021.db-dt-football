import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const Box = styled.div`
display: grid;
grid-template-columns: 40% 60%;
height: 95%;
width: 85%;
justify-self: center;
`;

const Text = styled.div`
text-align
`;

const News = styled.div`
`;

const Author = styled.div`
`;

const Image = styled.div`
  height: 100%;
  object-fit: cover;
  background-image: url(${"https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg"});
  background-position: center;
  background-size: cover;
  broder-left-width: 100px;
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