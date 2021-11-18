import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Grid2ArticleBox from '../components/Grid2ArticleBox'

const Grid = styled.div`
display: grid;
grid-template-columns: auto auto;
grid-template-rows: 200px 200px 200px 200px 200px;
`;

export default function Grid2() {
    return (
        <Grid>
            <Grid2ArticleBox color = "#0C6498"></Grid2ArticleBox>
            <Grid2ArticleBox color = "#C31F1F"></Grid2ArticleBox>
            <Grid2ArticleBox color = "#0C6498"></Grid2ArticleBox>
            <Grid2ArticleBox color = "#C31F1F"></Grid2ArticleBox>
            <Grid2ArticleBox color = "#0C6498"></Grid2ArticleBox>
            <Grid2ArticleBox color = "#C31F1F"></Grid2ArticleBox>
            <Grid2ArticleBox color = "#0C6498"></Grid2ArticleBox>
            <Grid2ArticleBox color = "#C31F1F"></Grid2ArticleBox>
            <Grid2ArticleBox color = "#0C6498"></Grid2ArticleBox>
            <Grid2ArticleBox color = "#C31F1F"></Grid2ArticleBox>
        </Grid>
    );
}