import React, { useState } from "react";
import styled from 'styled-components';

const NormalGrid = styled.div`
display: grid;
height: 85vh;
font-family: 'Open Sans Condensed', sans-serif;
grid-template-columns: 70% 10% 20%;
grid-template-rows: auto auto auto auto auto;
grid-template-areas: 
  "left left right1"
  "left left right2"
  "left left right3"
  "left left right4"
  "text arrow right5"
`;

const SmallImage = styled.div`
  height: 15vh;
  width: 100%;
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
  width: 95%;
  object-fit: cover;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  grid-area: ${(props) => props.direction};
  justify-content: center;
  justify-self: center;
`;


const Text = styled.div`
/* margin-right: 0; */
max-height: 100%;
width: 90%;
font-family: 'Open Sans Condensed', sans-serif;
z-index: 1000;
margin-left: 2.5%;
/* margin-right: 2.5%; */
width: 94%;
text-align: center;
margin-bottom: 12px;
grid-area: ${(props) => props.direction};
border-width: 10;
border-style: solid;
overflow-y:auto;
background-color: aliceblue;

`
const SeeMore = styled.div`
/* position: static; */
/* right: 0; */
/* margin-left: ; */
/* background-color: #a5c5d9; */
background-color: ${(props) => props.color};
justify-content: center;
justify-self: center; 
/* line-height: 100%; */
text-align: center;
text-justify: center;
margin-left: -10px;
width: 80%;
/* margin-left: 10px; */
/* width: 80%; */
/* margin-left: 5px;
margin-right: 5px; */
grid-area: ${(props) => props.direction};
margin-bottom: 12px;
`;

const Arrow = styled.div`
justify-self: center;
justify-content: center;
`;

const TextGrid = styled.div`
display: grid;
height: 85vh;
/* width: ; */
margin-bottom: 0px;
grid-template-columns: 70% 10% 20%;
grid-template-rows: auto auto auto auto auto;
grid-template-areas: 
  "text arrow right1"
  "text arrow right2"
  "text arrow right3"
  "text arrow right4"
  "text arrow right5"
`;

export default function Grid1Mobile(props) {
    const [ DBText_, setDBText ] = useState(false);
    const [ DTText_, setDTText ] = useState(false);
    const [ UCLAimagePicked, setUCLAimagePicked ] = useState(0);
    const [ USCimagePicked, setUSCimagePicked ] = useState(0);

    function DBGrid() {
        console.log(UCLAmainSources);
        if (!DBText_) {
            return (
            <NormalGrid>
            {UCLASmallImages.map((ele, index) => {return (
                <div onClick={() => {setUCLAimagePicked(index)}}>
                    {ele}
                </div> 
            )})}

            <BigImage direction="left" src={UCLAmainSources[UCLAimagePicked]}/>

            <Text direction="text" style={{"font-family": "Open Sans Condensed", "font-weight": "1000"}}>
                {UCLAplayerPreviewText[UCLAimagePicked]}
            </Text>

            <SeeMore color="#a5c5d9" direction="arrow" onClick={()=> {setDBText(true)}}>
                <Arrow>
                    {"\u2192"}  
                </Arrow>
            </SeeMore>
        </NormalGrid>

            );
        }

        else {
            return (
                <TextGrid>
            {UCLASmallImages.map((ele, index) => {return (
                <div onClick={() => {setUCLAimagePicked(index)}}>
                    {ele}
                </div> 
            )})}


            
                <Text direction = "text">
                {UCLAplayerBigText[UCLAimagePicked].map((ele, index)=> {
                    return (
                        <p style={{"font-family": "Open Sans Condensed", "font-weight": "1000"}}>
                        {ele.content}
                        </p>
                    );

                })}
                </Text>
                <SeeMore color="#a5c5d9" direction="arrow" onClick={()=> {setDBText(false)}}>
                    <Arrow>
                     {"\u2190"}  
                    </Arrow>
                </SeeMore>
            
        </TextGrid>

            );
        }
    }

    function DTGrid() {
        if (!DTText_) {
            return (
            <NormalGrid>
            {USCSmallImages.map((ele, index) => {return (
                <div onClick={() => {setUSCimagePicked(index)}}>
                    {ele}
                </div> 
            )})}

            <BigImage direction="left" src={USCmainSources[USCimagePicked]}/>

            
                
                <Text direction="text" style={{"font-family": "Open Sans Condensed", "font-weight": "1000"}}>
                {USCplayerPreviewText[USCimagePicked]}
            </Text>

            
                <SeeMore color = "#e9abab" direction="arrow" onClick={()=> {setDTText(true)}}>
                    <Arrow>
                     {"\u2192"}  
                    </Arrow>
                </SeeMore>
            
        </NormalGrid>

            );
        }

        else {
            return (
                <TextGrid>
            {USCSmallImages.map((ele, index) => {return (
                <div onClick={() => {setUSCimagePicked(index)}}>
                    {ele}
                </div> 
            )})}


            
                <Text direction="text">
                {USCplayerBigText[USCimagePicked].map((ele, index)=> {
                    return (
                        <p style={{"font-family": "Open Sans Condensed", "font-weight": "1000"}}>
                        {ele.content}
                        </p>
                    );

                })}
                </Text>
                <SeeMore color="#e9abab" direction="arrow"onClick={()=> {setDTText(false)}}>
                    <Arrow>
                     {"\u2190"}  
                    </Arrow>
                </SeeMore>
        </TextGrid>

            );
        }

    }

    let UCLAsideSources = [
    ];
    let UCLAmainSources = []

    let UCLAplayerPreviewText = [];
    let UCLAplayerBigText = [];

    let USCsideSources = [];
    let USCmainSources = [];

    let USCplayerPreviewText = [];
    let USCplayerBigText = [];

    if (typeof(props.imageDetails) === 'undefined') {
        console.log("hi");
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

    let UCLASmallImages = [];
    let USCSmallImages = [];

    for (var i = 0; i < UCLAsideSources.length; i++) {
      let image_number = i+1;
      UCLASmallImages.push(<SmallImage direction={"right" + image_number} src={UCLAsideSources[i]} />);
    }

    for (var i = 0; i < USCsideSources.length; i++) {
      let image_number = i+1;
      USCSmallImages.push(<SmallImage direction={"right" + image_number} src={USCsideSources[i]} />);
    }

    return (
        <>
        <DBGrid/>
        <DTGrid/>
        </>
    )
}
