import React from "react";
import styled from 'styled-components';
import { mediaQueries } from "../shared/config";
// import './Collab.css';

function CollabHeader(props) {
  const MainWrapper = styled.div`
    box-sizing: border-box;
    text-align: center;
    font-style: normal;
    font-weight: normal;
    background-color: white;
    position: relative;
    /* margin: 20px auto; */
    margin-bottom: 15px;
    margin-top: 20px;
    /* max-width: 1252px; */
    /* width: 90%; */
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

    ${mediaQueries.tablet} {
      font-size: 12px;
    }
  `;
  const CollabIntro = styled.div`
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    line-height: 130.8%;

    ${mediaQueries.tablet} {
      font-size: 10px;
    }
  `;
  console.log(props.data)
  return (
    <MainWrapper>
      <CollabTitle>{props.data['title']}</CollabTitle>
      <CollabIntro>{props.data['intro_text']}</CollabIntro>
    </MainWrapper>
  );
}

export default CollabHeader;
