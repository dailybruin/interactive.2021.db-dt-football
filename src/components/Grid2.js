import React from "react";
import styled from 'styled-components';
import Grid2ArticleBox from '../components/Grid2ArticleBox'

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 20px;

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
    -webkit-text-stroke: 1px white; 
    font-size: 20px;
`

const DB_TextBox = styled.div`
    /* border: 1px solid black; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* box-shadow: 0 3px 10px rgb(0 0 0 / 0.2); */

    //how to make a semi-transparent background
    background-image: linear-gradient(to bottom, #ffffff00 50%, #0C6498 50%); 
    //#fffffff00 is transparent
`

const DT_TextBox = styled.div`
    /* border: 1px solid black; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* box-shadow: 0 3px 10px rgb(0 0 0 / 0.2); */

    background-image: linear-gradient(to bottom, #ffffff00 50%, #C31F1F 50%);
`


export default function Grid2() {
    return (
        <>
            <TitleGrid>
                <DB_TextBox><Title>Daily Bruin</Title></DB_TextBox>
                <DT_TextBox><Title>Daily Trojan</Title></DT_TextBox>
            </TitleGrid>

            <Grid>
                <Grid2ArticleBox author = "Author Name" text = "This thing happened to these football players today this thing happened to these football players today" image = "https://ca-times.brightspotcdn.com/dims4/default/816b63e/2147483647/strip/true/crop/2048x1389+0+0/resize/1486x1008!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fd9%2F52%2Ff91bd6b43d1df750bb910d6f7919%2Fla-sp-usc-vs-ucla-20181117-pictures-001" color = "#0C6498"></Grid2ArticleBox>
                <Grid2ArticleBox author = "Author Name" text = "This thing happened to these football players today this thing happened to these football players today" image = "https://ca-times.brightspotcdn.com/dims4/default/816b63e/2147483647/strip/true/crop/2048x1389+0+0/resize/1486x1008!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fd9%2F52%2Ff91bd6b43d1df750bb910d6f7919%2Fla-sp-usc-vs-ucla-20181117-pictures-001" color = "#C31F1F"></Grid2ArticleBox>
                <Grid2ArticleBox author = "Author Name" text = "This thing happened to these football players today this thing happened to these football players today" image = "https://ca-times.brightspotcdn.com/dims4/default/816b63e/2147483647/strip/true/crop/2048x1389+0+0/resize/1486x1008!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fd9%2F52%2Ff91bd6b43d1df750bb910d6f7919%2Fla-sp-usc-vs-ucla-20181117-pictures-001" color = "#0C6498"></Grid2ArticleBox>
                <Grid2ArticleBox author = "Author Name" text = "This thing happened to these football players today this thing happened to these football players today" image = "https://ca-times.brightspotcdn.com/dims4/default/816b63e/2147483647/strip/true/crop/2048x1389+0+0/resize/1486x1008!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fd9%2F52%2Ff91bd6b43d1df750bb910d6f7919%2Fla-sp-usc-vs-ucla-20181117-pictures-001" color = "#C31F1F"></Grid2ArticleBox>
                <Grid2ArticleBox author = "Author Name" text = "This thing happened to these football players today this thing happened to these football players today" image = "https://ca-times.brightspotcdn.com/dims4/default/816b63e/2147483647/strip/true/crop/2048x1389+0+0/resize/1486x1008!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fd9%2F52%2Ff91bd6b43d1df750bb910d6f7919%2Fla-sp-usc-vs-ucla-20181117-pictures-001" color = "#0C6498"></Grid2ArticleBox>
                <Grid2ArticleBox author = "Author Name" text = "This thing happened to these football players today this thing happened to these football players today" image = "https://ca-times.brightspotcdn.com/dims4/default/816b63e/2147483647/strip/true/crop/2048x1389+0+0/resize/1486x1008!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fd9%2F52%2Ff91bd6b43d1df750bb910d6f7919%2Fla-sp-usc-vs-ucla-20181117-pictures-001" color = "#C31F1F"></Grid2ArticleBox>
                <Grid2ArticleBox author = "Author Name" text = "This thing happened to these football players today this thing happened to these football players today" image = "https://ca-times.brightspotcdn.com/dims4/default/816b63e/2147483647/strip/true/crop/2048x1389+0+0/resize/1486x1008!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fd9%2F52%2Ff91bd6b43d1df750bb910d6f7919%2Fla-sp-usc-vs-ucla-20181117-pictures-001" color = "#0C6498"></Grid2ArticleBox>
                <Grid2ArticleBox author = "Author Name" text = "This thing happened to these football players today this thing happened to these football players today" image = "https://ca-times.brightspotcdn.com/dims4/default/816b63e/2147483647/strip/true/crop/2048x1389+0+0/resize/1486x1008!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fd9%2F52%2Ff91bd6b43d1df750bb910d6f7919%2Fla-sp-usc-vs-ucla-20181117-pictures-001" color = "#C31F1F"></Grid2ArticleBox>
                <Grid2ArticleBox author = "Author Name" text = "This thing happened to these football players today this thing happened to these football players today" image = "https://ca-times.brightspotcdn.com/dims4/default/816b63e/2147483647/strip/true/crop/2048x1389+0+0/resize/1486x1008!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fd9%2F52%2Ff91bd6b43d1df750bb910d6f7919%2Fla-sp-usc-vs-ucla-20181117-pictures-001" color = "#0C6498"></Grid2ArticleBox>
                <Grid2ArticleBox author = "Author Name" text = "This thing happened to these football players today this thing happened to these football players today" image = "https://ca-times.brightspotcdn.com/dims4/default/816b63e/2147483647/strip/true/crop/2048x1389+0+0/resize/1486x1008!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fd9%2F52%2Ff91bd6b43d1df750bb910d6f7919%2Fla-sp-usc-vs-ucla-20181117-pictures-001" color = "#C31F1F"></Grid2ArticleBox>
            </Grid>
        </>
        
    );
}