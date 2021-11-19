import React from "react";
import styled from 'styled-components';
// import './Collab.css';
import CollabHeader from "./CollabHeader";
import { mediaQueries } from "../shared/config";

function CollabStory(props) {
  const ArticleCard = styled.div`
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 140%;
    background-color: white;
    /* margin: 30px auto;  */
    margin: 40px 50px 40px 50px;
    text-align: left;
    /* max-width: 1252px; */
    /* width: 90%; */
    &:hover{
        box-shadow: 5px 5px 5px rgba(0,0,0);
    }

    ${mediaQueries.tablet} {
      font-size: 20px;
      margin: 0px 0px 30px 0px;
    }
  `;
  const ArticleImg = styled.div`
    width: 100%;
    min-height: 400px;
    background-image: url(${props=>props.src});
    background-position: center;
    background-size: cover;

    ${mediaQueries.tablet} {
      min-height: 200px;
    }
  `;
  const ArticleInfo = styled.div`
    padding: 26px 2%;

    ${mediaQueries.tablet} {
      padding: 10px 4%;
    }
  `;
  const ArticleTitle = styled.a`
    /* max-width: 561px; */
    color: black;
    text-decoration: none;

    ${mediaQueries.tablet} {
      font-size: 14px;
      line-height: 0.5px;
    }
  `;
  const ArticleByline = styled.div`
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    font-size: 12px;
    line-height: 12px;
    text-transform: uppercase;
    margin-top: 20px;
  `;

  return (
    <div>
        <CollabHeader data={props.data}/>
      
        {
          props.data && props.data['article_cards'].map((card, index) =>
            <ArticleCard key={index}>
              <ArticleImg src={card['image_link']}/>
              <ArticleInfo>
                <ArticleTitle href={card['article_link']}>{card['title']}</ArticleTitle>
                <ArticleByline>{card['byline']}</ArticleByline>
              </ArticleInfo>
            </ArticleCard>
          )
        }
    </div>
  );
}

export default CollabStory;
