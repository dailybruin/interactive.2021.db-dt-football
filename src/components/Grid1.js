import React, {  } from "react";
import styled from 'styled-components';

const Grid = styled.div`
display: grid;
height: 50vh;
/* width: ; */
margin-left: 10%;
margin-right: 10%;
grid-template-columns: 10% auto auto 10%;
grid-template-rows: auto auto auto auto auto;
grid-template-areas: 
  "blue1 bigBlue bigRed red1"
  "blue2 bigBlue bigRed red2"
  "blue3 bigBlue bigRed red3"
  "blue4 bigBlue bigRed red4"
  "blue5 bigBlue bigRed red5"
`;

const SmallImage = styled.div`
  height: 90%;
  width: 90%;
  object-fit: cover;
  background-image: url(${"https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg"});
  background-position: center;
  background-size: cover;
  grid-area: ${(props) => props.direction};
  justify-content: center;
  justify-self: center;
`;

const BigImage = styled.div`
  height: 99%;
  width: 90%;
  object-fit: cover;
  background-image: url(${"https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg"});
  background-position: center;
  background-size: cover;
  grid-area: ${(props) => props.direction};
  justify-content: center;
  justify-self: center;
`;

export default function Grid1(){
    return (
        <Grid>
        <SmallImage direction="blue1"/>
        <SmallImage direction="blue2"/>
        <SmallImage direction="blue3"/>
        <SmallImage direction="blue4"/>
        <SmallImage direction="blue5"/>

        <BigImage direction="bigBlue"/>
        <BigImage direction="bigRed"/>

        <SmallImage direction="red1"/>
        <SmallImage direction="red2"/>
        <SmallImage direction="red3"/>
        <SmallImage direction="red4"/>
        <SmallImage direction="red5"/>
        </Grid>
    );

}