import React, { useState, useEffect } from "react";
import './App.css';

import Grid1 from "./components/Grid1";
import Grid1Mobile from "./components/Grid1Mobile";
import styled from 'styled-components';
import Grid2 from "./components/Grid2";
import bg from "./images/bg.svg";
import Landing from './components/Landing';
import CollabPodcast from "./components/CollabPodcast";
import CollabStory from "./components/CollabStory";

const Background = styled.div`
    background-color: #242424;
    background-image: url(${bg});
    background-size: cover;
    background-position: top;
    padding: 200px 50px 200px 50px;

`
function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/interactive.rivalry2021/")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  return (
    (data &&
    <>
      <Landing/>
      <Background>
        <Grid1/>
        <CollabStory data={data['collab'][0]}/>
        <Grid2/>
        <CollabPodcast/>
        <CollabPodcast data={data['collab_podcast']}/>
      </Background>
    </>
    )
  );
}

export default App;
