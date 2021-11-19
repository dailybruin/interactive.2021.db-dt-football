import React from "react";
import styled from 'styled-components';
// import './Collab.css';

function CollabHeader(props) {
  const MainWrapper = styled.div`
    box-sizing: border-box;
    text-align: center;
    font-style: normal;
    font-weight: normal;
    background-color: white;
    position: relative;
    margin: 20px auto;
    max-width: 1252px;
    width: 90%;
    padding: ${props.data['intro_text'] ? '15px 2%' : '7px 2%'};
  `;
  const CollabTitle = styled.div`
    font-family: 'Press Start 2P';
    position: absolute;
    top: -2px;
    left: 50%;
    transform: translate(-50%, -50%);
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 24px;
    width: 100%;
    text-shadow:
            1px 1px 0 #fff, -1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff,
            0px 1px 0 #fff, 0px -1px 0 #fff, -1px 0px 0 #fff, 1px 0px 0 #fff,
            2px 2px 0 #fff, -2px 2px 0 #fff, 2px -2px 0 #fff, -2px -2px 0 #fff,
            0px 2px 0 #fff, 0px -2px 0 #fff, -2px 0px 0 #fff, 2px 0px 0 #fff,
            1px 2px 0 #fff, -1px 2px 0 #fff, 1px -2px 0 #fff, -1px -2px 0 #fff,
            2px 1px 0 #fff, -2px 1px 0 #fff, 2px -1px 0 #fff, -2px -1px 0 #fff;
  `;
  const CollabIntro = styled.div`
    font-family: 'Gotham Condensed';
    font-size: 18px;
    line-height: 130.8%;
  `;
  return (
    <MainWrapper>
      <CollabTitle>{props.data['title']}</CollabTitle>
      <CollabIntro>{props.data['intro_text']}</CollabIntro>
    </MainWrapper>
  );
}

export default CollabHeader;
