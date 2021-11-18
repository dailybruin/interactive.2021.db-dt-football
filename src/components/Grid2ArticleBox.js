import React from "react";
import styled from 'styled-components';

const Box = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
min-height: 200px;
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
`;

export default function ArticleBox(props) {
    let text = props.text;
    let author = props.author;
    let image = props.image;
    let color = props.color;
    return (
        <Box> 
            <Text>
                <News> {text} </News>
                <Author> {author} </Author>
            </Text>
            <Image color={color} image = {image} src="" alt=""/>
        </Box>
    );
}