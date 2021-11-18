import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { Title } from 'chart.js';

const Credits = styled("div")`
  position: absolute;
  bottom: 20px;
  right: 50px;
  color: black;
  font-weight: bold;
`;


const Box = styled("div")`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  background-position: center;
  background-size: cover;
  position: relative;
`;

const Gif = styled("div")`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  background-position: center;
  background-size: cover;
  position: relative;
  background-image: url("https://endlessicons.com/wp-content/uploads/2012/11/image-holder-icon-614x460.png");
`;

// Use this function to update the larget image!
// This function can also be used to add the info text instead of the image
// TODO: add states and capability for large image to change 
// For now, the state's aren't upated 
function updateLeftLarge(newbackground) {
    this.setState({current_ucla: newbackground});
}
function updateRightLarge(newbackground) {
    this.setState({current_usc: newbackground});
}

const SpecialRow = styled("div") `
display: flex;
flex-direction: row;
`

export default function Interactive(props) 
{
    return (
        <>
        <p>Here's the interactive!</p>
        <SpecialRow>
            <Container>
        <Row>
            <Col md={4}>player1</Col>
        </Row>
        <Row>
            <Col md={4}>player2</Col>
        </Row>
        <Row>
            <Col md={4}>player3</Col>
        </Row>
        <Row>
            <Col md={4}>player4</Col>
        </Row>
        <Row>
            <Col md={4}>player5</Col>
        </Row>
    </Container>
    <Container>
        <Row>
            <Col md={4}>
            <img className="galleryimage" src={'https://m.media-amazon.com/images/I/41CyuoxrPvL._AC_.jpg'}></img>
            </Col>
        </Row>
        <Row>
            here's a preview of the info about this image....
        </Row>
        <Row>
            click here for more info
        </Row>
    </Container>
    
    <Container>
        <Row>
            <Col md={4}>
            <img className="galleryimage" src={'https://m.media-amazon.com/images/I/41CyuoxrPvL._AC_.jpg'}></img>
            </Col>
        </Row>
        <Row>
            here's a preview of the info about htis player...
        </Row>
        <Row>
            click here for more info
        </Row>
    </Container>
    <Container>
        <Row>
            <Col md={4}>player1</Col>
        </Row>
        <Row>
            <Col md={4}>player2</Col>
        </Row>
        <Row>
            <Col md={4}>player3</Col>
        </Row>
        <Row>
            <Col md={4}>player4</Col>
        </Row>
        <Row>
            <Col md={4}>player5</Col>
        </Row>
    </Container>
        </SpecialRow>
        </>
    )
}

