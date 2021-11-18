import React, { useState } from "react";
import styled from 'styled-components';

const NormalGrid = styled.div`
display: grid;
height: 50vh;
/* width: ; */
margin-left: 10%;
margin-right: 10%;
grid-template-columns: 10% 40% 40% 10%;
grid-template-rows: auto auto auto auto auto auto;
grid-template-areas: 
  "blue1 bigBlue bigRed red1"
  "blue2 bigBlue bigRed red2"
  "blue3 bigBlue bigRed red3"
  "blue4 bigBlue bigRed red4"
  "blue5 bigBlue bigRed red5"
  "db-text db-text dt-text dt-text"
`;

const LeftTextGrid = styled.div`
display: grid;
height: 50vh;
/* width: ; */
margin-left: 10%;
margin-right: 10%;
grid-template-columns: 10% 40% 40% 10%;
grid-template-rows: auto auto auto auto auto auto;
grid-template-areas: 
  "left left bigRed red1"
  "left left bigRed red2"
  "left left bigRed red3"
  "left left bigRed red4"
  "left left bigRed red5"
  "left left dt-text dt-text"
`;

const RightTextGrid = styled.div`
display: grid;
height: 50vh;
/* width: ; */
margin-left: 10%;
margin-right: 10%;
grid-template-columns: 10% 40% 40% 10%;
grid-template-rows: auto auto auto auto auto auto;
grid-template-areas: 
  "blue1 bigBlue right right"
  "blue2 bigBlue right right"
  "blue3 bigBlue right right"
  "blue4 bigBlue right right"
  "blue5 bigBlue right right"
  "db-text db-text right right"
`;

const BothSidesTextGrid = styled.div`
display: grid;
height: 50vh;
/* width: ; */
margin-left: 10%;
margin-right: 10%;
grid-template-columns: 10% 40% 40% 10%;
grid-template-rows: auto auto auto auto auto auto;
grid-template-areas: 
  "left left right right"
  "left left right right"
  "left left right right"
  "left left right right"
  "left left right right"
`;




const SmallImage = styled.div`
  height: 90%;
  width: 90%;
  object-fit: cover;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  grid-area: ${(props) => props.direction};
  justify-content: center;
  justify-self: center;
`;

const BigImage = styled.div`
  height: 99%;
  width: 90%;
  object-fit: cover;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  grid-area: ${(props) => props.direction};
  justify-content: center;
  justify-self: center;
`;

const DBText = styled.div`
width: 95%;
margin-left: 1%;
color: black;
background-color: red;
font-family: 'Courier New', Courier, monospace;
grid-area: ${(props) => props.direction};
`;

const DTText = styled.div`
width: 95%;
margin-left: 4%;
color: black;
background-color: red;
font-family: 'Courier New', Courier, monospace;
grid-area: ${(props) => props.direction};
`;




export default function Grid1(props) {
    const [ DBText_, setDBText ] = useState(false);
    const [ DTText_, setDTText ] = useState(false);
    const [ UCLAimagePicked, setUCLAimagePicked ] = useState(0);
    const [ USCimagePicked, setUSCimagePicked ] = useState(0);

    let UCLAsideSources = [];
    let UCLAmainSources = [];
    let UCLAplayerText = [];

    let USCsideSources = [];
    let USCmainSources = [];
    let USCplayerText = [];

    props.imageDetails.forEach((ele) => {
      if (ele.id === "UCLA") {
        UCLAsideSources.push(ele.src);
        UCLAmainSources.push(ele.mainSrc);
        UCLAplayerText.push(ele.playerText);
      }
      else {
        USCsideSources.push(ele.src);
        USCmainSources.push(ele.mainSrc);
        USCplayerText.push(ele.playerText);
      }

    })
    let UCLASmallImages = []
    let USCSmallImages = []

    for (var i = 0; i < UCLAsideSources.length; i++) {
      let image_number = i+1;
      UCLASmallImages.push(<SmallImage direction={"blue" + image_number} src={UCLAsideSources[i]} onClick={()=>{setUCLAimagePicked(i)}}/>);
    }

    for (var i = 0; i < USCsideSources.length; i++) {
      let image_number = i+1;
      UCLASmallImages.push(<SmallImage direction={"red" + image_number} src={USCsideSources[i]} onClick={()=>{setUSCimagePicked(i)}}/>);
    }

    let source = "https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg";

    if (!DTText_ && !DBText_) {
          return (
              <NormalGrid>
              {UCLASmallImages.map((ele, index) => {return ele})}

              <BigImage direction="bigBlue" src={UCLAmainSources[UCLAimagePicked]}/>
              <BigImage direction="bigRed" src = {USCmainSources[USCimagePicked]}/>

            <DBText direction="db-text">
              LET US SEEEEEE lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend
              mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum 
              <div onClick={()=>{setDBText(true)}}> READ MORE</div>
              </DBText>

              <DTText direction="dt-text"t>
              LET US SEEEEEE lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend
              mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum 
              <div onClick={()=>{setDTText(true)}}> READ MORE</div>
              </DTText>

              {USCSmallImages.map((ele, index) => {return ele})}
              </NormalGrid>
          );
    }

    if (DBText_ && !DTText_) {
      return (
              <LeftTextGrid>
              <BigImage direction="bigRed" src = {USCmainSources[USCimagePicked]}/>

            <DBText direction = "left">
              LET US SEEEEEE lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend
              mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum 
              <div onClick={()=>{setDBText(false)}}> READ LESS</div>
              </DBText>

              <DTText direction="dt-text">
              LET US SEEEEEE lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend
              mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum 
              <div onClick={()=>{setDTText(true)}}> READ MORE</div>
              </DTText>



              {USCSmallImages.map((ele, index) => {return ele})}
              </LeftTextGrid>
          );


    }

    if (!DBText_ && DTText_) {

      return (
              <RightTextGrid>
              {UCLASmallImages.map((ele, index) => {return ele})}

              <BigImage direction="bigBlue" src={UCLAmainSources[UCLAimagePicked]}/>
              

            <DBText direction="db-text" >
              LET US SEEEEEE lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend
              mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum 
              <div onClick={()=>{setDBText(true)}}> READ MORE</div>
            </DBText>

              <DTText direction="right">
              LET US SEEEEEE lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend
              mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum 
              <div onClick={()=>{setDTText(false)}}> READ LESS</div>
              </DTText>

              </RightTextGrid>
          );
    }

    if (DBText_ && DTText_) {
      return (
              <BothSidesTextGrid>
              
            <DBText direction="left">
              LET US SEEEEEE lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend
              mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum 
              <div onClick={()=>{setDBText(false)}}> READ LESS</div>
              </DBText>

              <DTText direction="right">
              LET US SEEEEEE lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend
              mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum 
              <div onClick={()=>{setDTText(false)}}> READ LESS</div>
              </DTText>

              </BothSidesTextGrid>
          );
     
    }

}
