import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Grid2ArticleBox from '../components/Grid2ArticleBox'
import {mediaQueries} from '../shared/config';

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 5px;

`;

export default function Grid2() {
    return (
        <Grid>
            <Grid2ArticleBox color = "blue"></Grid2ArticleBox>
            <Grid2ArticleBox color = "red"></Grid2ArticleBox>
            <Grid2ArticleBox color = "blue"></Grid2ArticleBox>
            <Grid2ArticleBox color = "red"></Grid2ArticleBox>
            <Grid2ArticleBox color = "blue"></Grid2ArticleBox>
            <Grid2ArticleBox color = "red"></Grid2ArticleBox>
            <Grid2ArticleBox color = "blue"></Grid2ArticleBox>
            <Grid2ArticleBox color = "red"></Grid2ArticleBox>
            <Grid2ArticleBox color = "blue"></Grid2ArticleBox>
            <Grid2ArticleBox color = "red"></Grid2ArticleBox>
        </Grid>
    );
}