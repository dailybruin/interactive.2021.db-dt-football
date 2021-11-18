import React from "react";
import styled from 'styled-components';
import './Collab.css';
import CollabHeader from "./CollabHeader";
import ShareIcon from '../share.png';
import PodcastBackground from '../podcast_background.png';

function CollabPodcast(props) {
  const PodcastCard = styled.div`
    box-sizing: border-box;
    font-family: 'Gotham Condensed';
    font-size: 24px;
    line-height: 140%;
    background-color: white;
    margin: 30px auto;
    text-align: left;
    max-width: 1252px;
    width: 90%;
    display: flex;
    align-items: center;
    position: relative;
    background-image: url(${PodcastBackground});
    background-repeat: no-repeat;
    background-position: 100% calc(100% - 40px);
  `;
  const PodcastImg = styled.img`
    height: 366px;
    width: 366px;
    z-index: 1;
  `;
  const PodcastInfo = styled.div`
    padding: 26px 5%;
  `;
  const PodcastTitle = styled.a`
    max-width: 573px;
    color: black;
    text-decoration: none;
  `;
  const PodcastByline = styled.div`
    font-family: 'Press Start 2P';
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
        props.data.map((card, index) =>
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
