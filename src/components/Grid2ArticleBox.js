import React from "react";
import styled from 'styled-components';

const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    background-color: white;

    &:hover{
        box-shadow: 5px 5px 5px rgba(0,0,0);
    }

`;

const Text = styled.div`
flex: 1 280px;
`;

const News = styled.div`
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    padding: 5px 10px 5px 10px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;  
    overflow: hidden;
`;

const Author = styled.div`
font-family: 'Poppins', sans-serif;
font-weight: 800;
font-size: 10px;
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

const NewsAnchor = styled.a`
    color: black;
    text-decoration: none;
`

export default function ArticleBox(props) {
    let text = props.text;
    let author = props.author;
    let image = props.image;
    let color = props.color;

    if (props.color == "ucla"){
        color = "#0C6498";
    }
    else{
        color = "#C31F1F";
    }

    return (
            <Box> 
                <Text>
                    <NewsAnchor href={props.url}>
                    <News> {text} </News>
                    </NewsAnchor>
                    <Author> {author} </Author>
                </Text>
                <Image color={color} image = {image} src="" alt=""/>
            </Box>
        
    );
}