import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import PlayerCards from "./PlayerCards";

const Grid = styled.div`
display: grid;
grid-template-columns: auto auto;
grid-template-rows: auto;
grid: 
  "1-left 1-right"
  "2-left 2-right"
  "3-left 3-right"
  "4-left 4-right"
  "5-left 5-right"
  "6-left 6-right"
`;

export default function Grid1(){
    return (
        <Grid>
          <PlayerCards direction="1-left"></PlayerCards>
          <PlayerCards direction="1-right"></PlayerCards>
          <PlayerCards direction="2-left"></PlayerCards>
          <PlayerCards direction="2-right"></PlayerCards>
          <PlayerCards direction="3-left"></PlayerCards>
          <PlayerCards direction="3-right"></PlayerCards>
          <PlayerCards direction="4-left"></PlayerCards>
          <PlayerCards direction="4-right"></PlayerCards>
          <PlayerCards direction="5-left"></PlayerCards>
          <PlayerCards direction="5-right"></PlayerCards>
          <PlayerCards direction="6-left"></PlayerCards>
          <PlayerCards direction="6-right"></PlayerCards>

        </Grid>
    );

}