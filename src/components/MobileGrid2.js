import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { mediaQueries } from "../shared/config";
import Grid2ArticleBox from './Grid2ArticleBox'

const Grid = styled.div`
display: grid;
grid-gap: 20px;
margin-bottom: 100px;

${mediaQueries.tablet} {
      margin-bottom: 60px;
    }
`;

const Title = styled.div`
    font-family: 'Press Start 2P', cursive;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: ${props => props.isDB ? "linear-gradient(to bottom, #ffffff00 50%, #0C6498 50%)" : "linear-gradient(to bottom, #ffffff00 50%, #C31F1F 50%)"}; 
    font-size: 18px;
    margin-top: 50px;
    margin-bottom: 10px;
    text-shadow:
            1px 1px 0 #fff, -1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff,
            0px 1px 0 #fff, 0px -1px 0 #fff, -1px 0px 0 #fff, 1px 0px 0 #fff,
            2px 2px 0 #fff, -2px 2px 0 #fff, 2px -2px 0 #fff, -2px -2px 0 #fff,
            0px 2px 0 #fff, 0px -2px 0 #fff, -2px 0px 0 #fff, 2px 0px 0 #fff,
            1px 2px 0 #fff, -1px 2px 0 #fff, 1px -2px 0 #fff, -1px -2px 0 #fff,
            2px 1px 0 #fff, -2px 1px 0 #fff, 2px -1px 0 #fff, -2px -1px 0 #fff;
`

export default function MobileGrid2(props) {
    console.log(props.isDB)
    console.log(props.data)
    if (props.isDB){
        return(
            <>
                <Title isDB={props.isDB}> {props.title} </Title>
                <Grid>
                    { props.data && props.data.map(block => {
                        if (block.type == "ucla"){
                            return (
                                <Grid2ArticleBox color = {block.type} author = {block.byline} text = {block.title} url = {block.article_link} image = {block.image_link}/>
                            )                           
                        }
                    })}
                        
                </Grid>
            </>
    
        );



    }
    else{
        return(
            <>
                <Title isDB={props.isDB}> {props.title} </Title>
                <Grid>
                    { props.data && props.data.map(block => {
                        if (block.type == "usc"){
                            return (
                                <Grid2ArticleBox color = {block.type} author = {block.byline} text = {block.title} url = {block.article_link} image = {block.image_link}/>
                            )                           
                        }
                    })}
                </Grid>
            </>
        )
    }
    

}