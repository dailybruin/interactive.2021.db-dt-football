import React, { useState } from "react";
import styled from 'styled-components';

const NormalGrid = styled.div`
display: grid;
height: 70vh;
/* width: ; */
margin-left: 2%;
margin-right: 2%;
grid-template-columns: 90% 10%;
grid-template-rows: auto auto auto auto auto;
grid-template-areas: 
  "left right1"
  "left right2"
  "left right3"
  "left right4"
  "text right5"
`;

const SmallImage = styled.div`
  height: 13vh;
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

const TextBox = styled.div`
height: 90%;
display: flex;
margin-left: 2.5%;
/* margin-right: 2.5%; */
width: 94%;
grid-area: ${(props) => props.direction};
border-width: 10;
border-style: solid;
flex-direction: row;
background-color: aliceblue;
`

const Text = styled.div`
/* margin-right: 0; */
width: 90%;

`
const SeeMore = styled.div`
background-color: #0C64985E;
justify-content: center;
/* justify-self: center; */
height: 100%;
line-height: 100%;
text-align: center;
text-justify: center;
/* margin-top: */
/* margin-left: 0%; */
width: 10%;
`;

const Arrow = styled.div`
justify-self: center;
justify-content: center;
`;

const TextGrid = styled.div`
display: grid;
height: 70vh;
/* width: ; */
margin-bottom: 0;
margin-left: 2%;
margin-right: 2%;
grid-template-columns: 90% 10%;
grid-template-rows: auto auto auto auto auto;
grid-template-areas: 
  "text right1"
  "text right2"
  "text right3"
  "text right4"
  "text right5"
`;

export default function Grid1Mobile(props) {
    const [ DBText_, setDBText ] = useState(false);
    const [ DTText_, setDTText ] = useState(false);
    const [ UCLAimagePicked, setUCLAimagePicked ] = useState(0);
    const [ USCimagePicked, setUSCimagePicked ] = useState(0);

    function DBGrid() {
        if (!DBText_) {
            return (
            <NormalGrid>
            {UCLASmallImages.map((ele, index) => {return (
                <div onClick={() => {setUCLAimagePicked(index)}}>
                    {ele}
                </div> 
            )})}

            <BigImage direction="left" src={UCLAmainSources[UCLAimagePicked]}/>

            <TextBox direction="text">
                <Text>HELLO</Text>
                <SeeMore onClick={()=> {setDBText(true)}}>
                    <Arrow>
                     {"\u2192"}  
                    </Arrow>
                </SeeMore>
            </TextBox>
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


            <TextBox direction="text">
                <Text>HELLO</Text>
                <SeeMore onClick={()=> {setDBText(false)}}>
                    <Arrow>
                     {"\u2192"}  
                    </Arrow>
                </SeeMore>
            </TextBox>
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

            <TextBox direction="text">
                <Text>HELLO</Text>
                <SeeMore onClick={()=> {setDTText(true)}}>
                    <Arrow>
                     {"\u2192"}  
                    </Arrow>
                </SeeMore>
            </TextBox>
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


            <TextBox direction="text">
                <Text>HELLO</Text>
                <SeeMore onClick={()=> {setDTText(false)}}>
                    <Arrow>
                     {"\u2192"}  
                    </Arrow>
                </SeeMore>
            </TextBox>
        </TextGrid>

            );
        }

    }

    let UCLAsideSources = [
    "https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg", 
    "https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg", 
    "https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg",
    "https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg",
    "https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg"];
    let UCLAmainSources = ["https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg", 
    "https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg", 
    "https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg",
    "https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg",
    "https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg"]

    let UCLAplayerPreviewText = [];
    let UCLAplayerBigText = [];

    let USCsideSources = ["https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg", 
    "https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg", 
    "https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg",
    "https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg",
    "https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg"];
    let USCmainSources = ["https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg", 
    "https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg", 
    "https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg",
    "https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg",
    "https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg"];

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
