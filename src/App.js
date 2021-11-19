import React, { useState, useEffect } from "react";
import './App.css';
import HeaderAndSub from './Components/HeaderAndSub';
import Navbar from "./Components/Navbar";

import Grid1 from "./Components/Grid1";
import Grid1Mobile from "./Components/Grid1Mobile";
import styled from 'styled-components';
import Grid2 from "./Components/Grid2";
import bg from "./images/bg.svg";
import Landing from './Components/Landing';
import CollabPodcast from "./Components/CollabPodcast"
import CollabStory from "./Components/CollabStory";
import MobileGrid2 from "./Components/MobileGrid2";
import { mediaQueries } from "./shared/config";
import Collaborative from "./Components/Collaborative"
import ReactGA from 'react-ga';

const Background = styled.div`
    background-color: #242424;
    background-image: url(${bg});
    background-size: cover;
    background-position: top;

    padding: 50px 100px 200px 100px;

    ${mediaQueries.tablet} {
      padding: 50px 20px 200px 20px;
    }
`


function App() {
  const [ data, setData ] = useState(null);
  const media = window.matchMedia('(max-width: 450px)');
  const [isMobile, setIsMobile] = useState(media.matches);
  media.addEventListener('change', () => {
  if (media.matches !== isMobile) {
      setIsMobile(media.matches);
  }
  });

  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/interactive.rivalry2021/")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

// google analytics
function initializeReactGA() {
  ReactGA.initialize('294117319');
  ReactGA.pageview('/homepage');
}


function prepForGrid1(players) {
  let arrOfPlayers = []
    players.ucla.forEach((ele, index) => {
      arrOfPlayers.push({
        id: "UCLA",
        src: ele.thumbnail_link,
        mainSrc: ele.selected_image_link,
        playerPreviewText: ele.preview,
        playerBigText: ele.text
      })
    })

    players.usc.forEach((ele, index) => {
      arrOfPlayers.push({
        id: "USC",
        src: ele.thumbnail_link,
        mainSrc: ele.selected_image_link,
        playerPreviewText: ele.preview,
        playerBigText: ele.text
      })
    })  
    return arrOfPlayers;
  }
 
  // google analytics
  initializeReactGA();

  return (

    (data &&
    <>
      {console.log(data.players)}

      <Landing data={data}/>
      <Background>
        <HeaderAndSub/>
        <Navbar/>
        <CollabStory data={data['collab'][0]} />
        <Grid1 imageDetails={prepForGrid1(data.players[0])}/>
        {isMobile && <MobileGrid2 isDB title={"Daily Bruin"} data={data.content}/>}
        {isMobile && <MobileGrid2 title={"Daily Trojan"} data={data.content}/>}
        {!isMobile && <Grid2 data={data.content} />}
        
        <CollabStory data={data['collab'][0]}/>
        <CollabPodcast data={data['collab_podcast']}/>
      </Background>
    </>
    )
  );
}

export default App;
