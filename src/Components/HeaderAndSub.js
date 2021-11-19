import React from 'react';
import styled from 'styled-components';
import { mediaQueries } from "../shared/config";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: "Press Start 2P", cursive;
    color: white;
    padding: 1% 5% 15px 5%;
    ${mediaQueries.tablet} {
        flex-direction: column;
        font-size: 15px;
    }
`;

const Link = styled.a`
    color: black;
    text-decoration: none;
    font-size: 18px;
    padding: 10px 33px 10px 50px;
    text-shadow:
            1px 1px 0 #fff, -1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff,
            0px 1px 0 #fff, 0px -1px 0 #fff, -1px 0px 0 #fff, 1px 0px 0 #fff,
            2px 2px 0 #fff, -2px 2px 0 #fff, 2px -2px 0 #fff, -2px -2px 0 #fff,
            0px 2px 0 #fff, 0px -2px 0 #fff, -2px 0px 0 #fff, 2px 0px 0 #fff,
            1px 2px 0 #fff, -1px 2px 0 #fff, 1px -2px 0 #fff, -1px -2px 0 #fff,
            2px 1px 0 #fff, -2px 1px 0 #fff, 2px -1px 0 #fff, -2px -1px 0 #fff;
    ${mediaQueries.tablet} {
        padding: 10px 50px 10px 50px;
        font-size: 15px;
    }
`

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: 'Press Start 2P', cursive;
    font-size: 52px;
    text-shadow:
            1px 1px 0 #fff, -1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff,
            0px 1px 0 #fff, 0px -1px 0 #fff, -1px 0px 0 #fff, 1px 0px 0 #fff,
            2px 2px 0 #fff, -2px 2px 0 #fff, 2px -2px 0 #fff, -2px -2px 0 #fff,
            0px 2px 0 #fff, 0px -2px 0 #fff, -2px 0px 0 #fff, 2px 0px 0 #fff,
            1px 2px 0 #fff, -1px 2px 0 #fff, 1px -2px 0 #fff, -1px -2px 0 #fff,
            2px 1px 0 #fff, -2px 1px 0 #fff, 2px -1px 0 #fff, -2px -1px 0 #fff;
    ${mediaQueries.tablet} {
        flex-direction: column;
        font-size: 35px;
    }
`

const Word = styled.div`
    margin-bottom: 10px;
`


export default function HeaderAndSub(props) 
{
    return (
        // <Display>
        //     <Image>
        //     <img src={rivalry} alt="rivalry" />
        //     <Papers> 
        //     <a href="https://dailybruin.com">
        //       <img src={db} alt="Daily Bruin" />
        //     </a>            
        //       <Addition> 
        //       <img src={x} alt="and" />
        //       </Addition>
        //       <a href="https://dailytrojan.com">
        //       <img src={dt} alt="Daily Trojan" />
        //     </a>  
        //     </Papers>
        //     </Image>
        // </Display>
        <>
            <Header>
              <Word>RIVALRY</Word>
              <Word>ISSUE</Word>
            </Header>
            <Wrapper>
              <Link href="https://dailybruin.com">Daily Bruin</Link>
              <Link>x</Link>
              <Link href="https://dailytrojan.com">Daily Trojan</Link>

            </Wrapper>
        </>
        
    )
}
