import React, { useState, useEffect, useRef, useCallback } from "react";
import './App.css';
import HeaderAndSub from './Components/HeaderAndSub';
import Navbar from "./Components/Navbar";
import styled from 'styled-components';
import Grid2 from "./Components/Grid2";
import bg from "./images/bg.svg";
import Landing from './Components/Landing';
import CollabPodcast from "./Components/CollabPodcast"
import CollabStory from "./Components/CollabStory";
import MobileGrid2 from "./Components/MobileGrid2";
import { mediaQueries } from "./shared/config";

const Background = styled.div`
    background-color: #242424;
    background-image: url(${bg});
    background-size: cover;
    background-position: top;

    padding: 50px 100px 200px 50px;

    ${mediaQueries.tablet} {
      padding: 50px 20px 40px 20px;
    }
`
const Footer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins',sans-serif;
    color: white;
    text-align: center;
    
`

const Text = styled.div`
    margin: 100px 100px 30px 100px;
    ${mediaQueries.tablet} {
      margin: 10px 30px 10px 30px;
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

  let myRef = useRef(null);
  const [firstTime, setFirstTime] = useState(true);
  const scroller = useCallback(() => {
    setTimeout(() => {
      if (myRef && myRef.current) {
        myRef.current.scrollIntoView({behavior: 'smooth'})
        setFirstTime(false)
      }
    }, 5000)
  }, [myRef])

  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/interactive.rivalry2021/")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  return (

    (data &&
    <>
      <Landing data={data}/>
      <div ref={myRef}>
      <Background>
        
          <HeaderAndSub/>
        
        { firstTime ? scroller() : null }
        <Navbar/>
        <a name='2'>
          <CollabStory data={data['collab'][0]} />
        </a>
        <a name='3'>
          {isMobile && <MobileGrid2 isDB title={"Daily Bruin"} data={data.content}/>}
          {isMobile && <MobileGrid2 title={"Daily Trojan"} data={data.content}/>}
          {!isMobile && <Grid2 data={data.content} />}
        </a>
        
        <a name='4'>
          <CollabPodcast data={data['collab_podcast']}/>
        </a>

        <Footer>
          <Text>
          Built with Suzy’s ♥ in Kerckhoff 118 by Sunny Li, Aritra Mullick, Mark Benliyan, Janis Chen, Camille Chou, Selina Huynh, Maggie Li, Tracy Zhao, Angad. 
          <br/>Also thanks to Shuning Zhang's help from Daily Trojan. <br/>Designed by Lauren Ho and Alyssa Shao.
          </Text>
        
        </Footer>
        
      </Background>
      </div>

    </>
    )
  );
}

export default App;
