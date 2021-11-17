import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import PlayerCards from "./PlayerCards";

const Grid = styled.div`
display: grid;
grid-template-columns: auto auto;
grid-template-rows: auto auto auto auto auto;
grid: 
  "1-left 1-right"
  "2-left 2-right"
  "3-left 3-right"
  "4-left 4-right"
  "5-left 5-right"
`;

export default function Grid1(){
  let red = "#C31F1F"
  let blue = "#0C6498"
    return (
        <Grid>
          <PlayerCards color = {blue} direction="1-left"></PlayerCards>
          <PlayerCards color = {red} direction="1-right"></PlayerCards>
          <PlayerCards color = {blue} direction="2-left"></PlayerCards>
          <PlayerCards color = {red} direction="2-right"></PlayerCards>
          <PlayerCards color = {blue} direction="3-left"></PlayerCards>
          <PlayerCards color = {red} direction="3-right"></PlayerCards>
          <PlayerCards color = {blue} direction="4-left"></PlayerCards>
          <PlayerCards color = {red} direction="4-right"></PlayerCards>
          <PlayerCards color = {blue} direction="5-left"></PlayerCards>
          <PlayerCards color = {red} direction="5-right"></PlayerCards>

        </Grid>
    );

}