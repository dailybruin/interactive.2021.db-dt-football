import React, { useState } from "react";
import styled from 'styled-components';
import '../App.css';

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

const Title = styled.div`
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




const SmallImag = styled.div`
  height: 90%;
  width: 90%;
  object-fit: cover;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  grid-area: ${(props) => props.direction};
  justify-content: center;
  justify-self: center;
  z-index: 2;
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
background-color: white;
font-family: 'Open Sans Condensed', sans-serif;
grid-area: ${(props) => props.direction};
overflow-y:auto;
align-items: center;
text-align: center;
`;

const DTText = styled.div`
width: 95%;
margin-left: 4%;
color: black;
background-color: white;
font-family: 'Open Sans Condensed', sans-serif;
grid-area: ${(props) => props.direction};
overflow-y:auto;
align-items: center;
text-align: center;
`;


export default function Grid1(props) {
  console.log(props);
    const [ DBText_, setDBText ] = useState(false);
    const [ DTText_, setDTText ] = useState(false);
    const [ UCLAimagePicked, setUCLAimagePicked ] = useState(0);
    const [ USCimagePicked, setUSCimagePicked ] = useState(0);

    function SmallImage(props) {
      let school = props.school;
      let index = props.num;
      let source = props.src;
      let dir = props.direction;
      if (school === "UCLA")
        return (
            <SmallImag src={source} direction = {dir} onClick={() => {console.log(index); setUCLAimagePicked(index)}}/>
        )
      else {
        return (
            <SmallImag src={source} direction = {dir} onClick={() => {console.log(index); setUSCimagePicked(index)}}/>
        )

      }
    } 

    let UCLAsideSources = [];

    let UCLAmainSources = []

    let UCLAplayerPreviewText = [];

    let UCLAplayerBigText = [];

    let USCsideSources = [];

    let USCmainSources = [];

    let USCplayerPreviewText = [
    ];
    let USCplayerBigText = [
    
    ];

    if (typeof(props.imageDetails) === 'undefined') {
      console.log("HI");
      ;
    }

    else {
        props.imageDetails.forEach((ele) => {
          if (ele.id === "UCLA") {
            
            UCLAsideSources.push(ele.src);
            UCLAmainSources.push(ele.mainSrc);
            UCLAplayerPreviewText.push(ele.playerPreviewText);
            UCLAplayerBigText.push(ele.playerBigText);
          }
          else {
            USCsideSources.push(ele.src);
            USCmainSources.push(ele.mainSrc);
            USCplayerPreviewText.push(ele.playerPreviewText);
            USCplayerBigText.push(ele.playerBigText);
          }

        })
      }
    
      console.log(UCLAsideSources);
      console.log(USCsideSources);

    let UCLASmallImages = [];
    let USCSmallImages = [];

    for (var i = 0; i < UCLAsideSources.length; i=i+1) {
      let image_number = i+1;
      UCLASmallImages.push(<SmallImage direction={"blue" + image_number} school= "UCLA" src={UCLAsideSources[i]} num={i}/>);
    }

    

    for (var j = 0; j < USCsideSources.length; j=j+1) {
      let image_number = j+1;
      USCSmallImages.push(<SmallImage direction={"red" + image_number} src={USCsideSources[j]} num={j}/>);
    }

    /* console.log(UCLASmallImages);
    console.log(USCSmallImages);
    console.log(UCLAmainSources);
    console.log(USCmainSources); */
    console.log(UCLAplayerBigText);


    if (!DTText_ && !DBText_) {
          return (
            <>
            <Title>Interactive</Title>
              <NormalGrid>
              {UCLASmallImages.map((ele, index) => {
                return (
                    ele
            )})}

              <BigImage direction="bigBlue" src={UCLAmainSources[UCLAimagePicked]}/>

              <BigImage direction="bigRed" src = {USCmainSources[USCimagePicked]}/>

            <DBText direction="db-text">
              {UCLAplayerPreviewText[UCLAimagePicked]}
              <div onClick={()=>{setDBText(true)}} style={{"font-family": "Open Sans Condensed", "font-weight": "1000"}}>read more</div>
              </DBText>

              <DTText direction="dt-text">
              {USCplayerPreviewText[USCimagePicked]}
              <div onClick={()=>{setDTText(true)}} style={{"font-family": "Open Sans Condensed", "font-weight": "1000"}}>read more</div>
              </DTText>


              {USCSmallImages.map((ele, ind) => {
                /* console.log(ind); */
                return (
                
                    ele
                
            )})}
              </NormalGrid>
              </>
          );
    }

    if (DBText_ && !DTText_) {
      return (
        <>
        
              <LeftTextGrid>
              <Title>Interactive</Title>
              <BigImage direction="bigRed" src = {USCmainSources[USCimagePicked]}/>

            <DBText direction = "left">
            {(UCLAplayerBigText[UCLAimagePicked]).map((ele, index)=> {
              return (
                <div>
                {ele.content}
                </div>
              );
            })}
              <div onClick={()=>{setDBText(false)}} style={{"font-family": "Open Sans Condensed", "font-weight": "1000"}}>read less</div>
              </DBText>

              <DTText direction="dt-text">
              {USCplayerPreviewText[USCimagePicked]}
              <div onClick={()=>{setDTText(true)}} style={{"font-family": "Open Sans Condensed", "font-weight": "1000"}}>read more</div>
              </DTText>



              {USCSmallImages.map((ele, index) => {return (
                <div onClick={() => {setUSCimagePicked(index)}}>
                    {ele}
                </div> )})}

              </LeftTextGrid>
              </>
          );


    }

    if (!DBText_ && DTText_) {

      return (
              <RightTextGrid>
                <Title>Interactive</Title>
              {UCLASmallImages.map((ele, index) => {return (
                <div onClick={() => {console.log(index); setUCLAimagePicked(index)}}>
                    {ele}
                </div> 
            )})}

              <BigImage direction="bigBlue" src={UCLAmainSources[UCLAimagePicked]}/>
              

            <DBText direction="db-text" >
            {UCLAplayerPreviewText[UCLAimagePicked]}
              <div onClick={()=>{setDBText(true)}}> READ MORE</div>
            </DBText>

              <DTText direction="right">
              {(USCplayerBigText[USCimagePicked]).map((ele, index)=> {
              return (
                <p>
                {ele.content}
                </p>
              );
            })}

              {USCSmallImages.map((ele, index) => {return (
                <div onClick={() => {setUSCimagePicked(index)}}>
                    {ele}
                </div> )})}

              <div onClick={()=>{setDTText(false)}}> READ LESS</div>
              </DTText>

              </RightTextGrid>
          );
    }

    if (DBText_ && DTText_) {
      return (
              <BothSidesTextGrid>
            <DBText direction="left">
            {(UCLAplayerBigText[UCLAimagePicked]).map((ele, index)=> {
              return (
                <div>
                {ele.content}
                </div>
              );
            })}
              <div onClick={()=>{setDBText(false)}}> READ LESS</div>
              </DBText>

              <DTText direction="right">
              {(USCplayerBigText[USCimagePicked]).map((ele, index)=> {
              return (
                <p>
                {ele.content}
                </p>
              );
            })}
              <div onClick={()=>{setDTText(false)}}> READ LESS</div>
              </DTText>

              </BothSidesTextGrid>
          );
     
    }

}
