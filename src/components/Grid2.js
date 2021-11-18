import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Grid2ArticleBox from '../components/Grid2ArticleBox'

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: auto;
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