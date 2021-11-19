import React from "react";
import styled from 'styled-components';
// import './Collab.css';
import CollabHeader from "./CollabHeader";
import ShareIcon from '../share.png';
import PodcastBackground from '../podcast_background.png';
import { mediaQueries } from "../shared/config";



function CollabPodcast(props) {
  const PodcastCard = styled.div`
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    line-height: 140%;
    background-color: white;
    margin: 40px 50px 15px 50px;
    text-align: left;
    /* max-width: 1252px; */
    /* width: 90%; */
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    position: relative;
    background-image: url(${PodcastBackground});
    background-size: cover;
    /* background-repeat: no-repeat; */
    /* background-position: 100% calc(100% - 40px); */
    background-position: center;
    &:hover{
        box-shadow: 5px 5px 5px rgba(0,0,0);
    }

    ${mediaQueries.tablet} {
      font-size: 20px;
      margin: 0px 0px 30px 0px;
    }
  `;
  const PodcastImg = styled.div`
    /* height: 366px;
    width: 40%;
    z-index: 1;
    @media screen and (max-width: 767px) {
      width: 100%;
      m
    } */
    width: 100%;
    min-height: 400px;
    background-image: url(${props=>props.src});
    background-position: center;
    background-size: cover;

    ${mediaQueries.tablet} {
      min-height: 200px;
    }
  `;
  const PodcastInfo = styled.div`
    padding: 26px 5% 40px 5%;
  `;
  const PodcastTitle = styled.a`
    /* max-width: 573px; */
    color: black;
    text-decoration: none;
  `;
  const PodcastByline = styled.div`
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    font-size: 12px;
    line-height: 12px;
    text-transform: uppercase;
    margin: 30px 0;
  `;
  const PodcastShareButton = styled.img`
    width: 20px;
  `;
  const PodcastBar = styled.div`
    position: absolute;
    width: 100%;
    height: 40px;
    bottom: 0;
    left: 0;
    background-color: #F7CD6A;
  `;
  return (
    <div>
      <CollabHeader data={{
        title: 'COLLAB PODCAST',
        intro_text: ''
      }}/>
      {
        
        props.data && props.data.map((card, index) =>
          <PodcastCard key={index}>
            <PodcastImg src={card['image_link']}/>
            <PodcastInfo>
              <PodcastTitle href={card['podcast_link']}>{card['title']}</PodcastTitle>
              <PodcastByline>{card['byline']}</PodcastByline>
              <a href={card['podcast_link']}><PodcastShareButton src={ShareIcon}/></a>
            </PodcastInfo>
            <PodcastBar/>
          </PodcastCard>
        )
      }
    </div>
  );
}

export default CollabPodcast;
