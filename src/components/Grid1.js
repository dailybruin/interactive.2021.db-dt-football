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
  background-image: url(${"https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg"});
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

export default function Grid1() {
    const [ DBText_, setDBText ] = useState(false);
    const [ DTText_, setDTText ] = useState(false);
    const [ ImagePicked, setImagePicked ] = useState(0);

    let source = "https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg";
    let arr = [<SmallImage direction="blue1" src = {source}/>,
              <SmallImage direction="blue2" src = {source}/>,
              <SmallImage direction="blue3" src = {source}/>,
              <SmallImage direction="blue4" src = {source}/>,
              <SmallImage direction="blue5" src = {source}/>];

    if (!DTText_ && !DBText_) {
          return (
              <NormalGrid>
              {arr.map((ele, index) => {return ele})}

              <BigImage direction="bigBlue"/>
              <BigImage direction="bigRed"/>

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



              <SmallImage direction="red1"/>
              <SmallImage direction="red2"/>
              <SmallImage direction="red3"/>
              <SmallImage direction="red4"/>
              <SmallImage direction="red5"/>
              </NormalGrid>
          );
    }

    if (DBText_ && !DTText_) {
      return (
              <LeftTextGrid>
              <BigImage direction="bigRed"/> 

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



              <SmallImage direction="red1"/>
              <SmallImage direction="red2"/>
              <SmallImage direction="red3"/>
              <SmallImage direction="red4"/>
              <SmallImage direction="red5"/>
              </LeftTextGrid>
          );


    }

    if (!DBText_ && DTText_) {

      return (
              <RightTextGrid>
              <SmallImage direction="blue1"/>
              <SmallImage direction="blue2"/>
              <SmallImage direction="blue3"/>
              <SmallImage direction="blue4"/>
              <SmallImage direction="blue5"/>

              <BigImage direction="bigBlue"/>
              

            <DBText direction="db-text">
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
