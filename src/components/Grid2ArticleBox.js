import React from "react";
import styled from 'styled-components';
import { mediaQueries } from "../shared/config";

const Box = styled.a`
    display: flex;
    text-decoration: none;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    background-color: white;
    color: black;
    /* overflow: visible; */
    &:hover{
        box-shadow: 5px 5px 5px rgba(0,0,0);
    }

    ${mediaQueries.tablet} {
      min-height: 150px;
    }
`;

const Text = styled.div`
flex: 1 280px;
`;

const News = styled.div`
    word-wrap: break-word;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    padding: 5px 10px 5px 10px;
    /* display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;   */
    overflow: hidden;

    ${mediaQueries.tablet} {
      font-size: 12px;
      padding: 1px 10px 1px 10px;
    }
`;

const Author = styled.div`
font-family: 'Poppins', sans-serif;
font-weight: 800;
font-size: 10px;
padding: 10px;
`;

const Image = styled.img`
  flex: 1 330px;
  min-height: 200px;
  width: 50%;
  object-fit: cover;
  background-image: url(${(props) => props.src});
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
            <Box href={props.url}> 
                <Text>
                    <NewsAnchor href={props.url}>
                    <News> {text} </News>
                    </NewsAnchor>
                    <Author> {author} </Author>
                </Text>
                    <Image color={color} image = {image} src={image} alt=""/>
                      
            </Box>
        
    );
}