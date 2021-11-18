import React from 'react';
import styled from 'styled-components';
import RivalryImage from '../testImage.png'

const Description = styled.div`
    background-color: white;
    text-align: center;
    padding: 3% 10%;
`;

const Container = styled.div`
    background-image: url(${props=>props.src});
    background-position: center;
    background-size: cover;
    position: relative;
    height: 50vh;
    background-color: white;
    text-align: left;
`;

const TextBox = styled.div`
    position: absolute;
    background-color: white;
    bottom: 0;
    width: 100%;
    height: 30%;
    /* border: 2px solid black; */
    text-align: left;
`;

const Title = styled.div`
    width: 50%;
    padding: 2% 2%;
`;

const Author = styled.div`
    font-weight: bold;
    width: 100%;
    padding-left: 2%;
`;


export default function Collaborative(props) {
    return (
        <div> 
            <Description>Description for collab story description for collab story description for collab story description for collab story description for collab story description for collab story description for collab story.</Description>
            <Container src={RivalryImage}>
                <TextBox>
                    <Title> Article Title </Title>
                    <Author> Author </Author>
                </TextBox>
            </Container>
            
        </div>
    );
}