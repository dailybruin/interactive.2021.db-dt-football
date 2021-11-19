import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Grid2ArticleBox from './Grid2ArticleBox';

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 20px;
margin-bottom: 100px;
`;

const TitleGrid = styled.div`
  display: grid; 
  grid-template-columns: repeat(2,1fr);
  /* border: 1px solid black; */
  padding-bottom: 15px;
  grid-gap: 20px;
`;

const Title = styled.div`
    font-family: 'Press Start 2P', cursive;
    /* -webkit-text-stroke: 1px white;  */
    font-size: 20px;
    text-shadow:
            1px 1px 0 #fff, -1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff,
            0px 1px 0 #fff, 0px -1px 0 #fff, -1px 0px 0 #fff, 1px 0px 0 #fff,
            2px 2px 0 #fff, -2px 2px 0 #fff, 2px -2px 0 #fff, -2px -2px 0 #fff,
            0px 2px 0 #fff, 0px -2px 0 #fff, -2px 0px 0 #fff, 2px 0px 0 #fff,
            1px 2px 0 #fff, -1px 2px 0 #fff, 1px -2px 0 #fff, -1px -2px 0 #fff,
            2px 1px 0 #fff, -2px 1px 0 #fff, 2px -1px 0 #fff, -2px -1px 0 #fff;
`;

const DB_TextBox = styled.div`
    /* border: 1px solid black; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* box-shadow: 0 3px 10px rgb(0 0 0 / 0.2); */

    //how to make a semi-transparent background
    background-image: linear-gradient(to bottom, #ffffff00 50%, #0C6498 50%); 
    //#fffffff00 is transparent
`;

const DT_TextBox = styled.div`
    /* border: 1px solid black; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* box-shadow: 0 3px 10px rgb(0 0 0 / 0.2); */

    background-image: linear-gradient(to bottom, #ffffff00 50%, #C31F1F 50%);
`


export default function Grid2(props) {
    let allData = props.data;
    let array = [];
    let combine = [];
    
    allData && allData.forEach((element, index)=>{
        array.push(element);
    });

    if (array){
        for (let i=0; i<6; i++){
            combine.push(array[i]);
            combine.push(array[i+6]);
        }
    }
    

    console.log(allData);
    console.log(allData[1]);
    console.log(combine);

    return (
        <>
            <TitleGrid>
                <DB_TextBox><Title>Daily Bruin</Title></DB_TextBox>
                <DT_TextBox><Title>Daily Trojan</Title></DT_TextBox>
            </TitleGrid>

            <Grid>
                { combine && combine.map((card,index)=>
                    <Grid2ArticleBox color = {card.type} author = {card.byline} text = {card.title} url = {card.article_link} image = {card.image_link}/>
                )}
            </Grid>
        </>
    );
}

    