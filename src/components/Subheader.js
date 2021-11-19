import React from 'react';
import styled from 'styled-components';
import db from '../images/db.svg';
import dt from '../images/dt.svg';
import rivalry from '../images/rivalry.svg';
import x from '../images/x.svg';;

const Display = styled("div")`
  width: 100%;
  height: 100%;
`;

const Image = styled("div")`
  object-fit: cover;
  position: relative; 
  padding: 30px;
`;

const Papers = styled("div")`
  position: relative; 
  padding: 20px;
`;

const Addition = styled("a")`
  position: relative; 
  padding: 40px;
`;



export default function Landing(props) 
{
    return (
        <Display>
            <Image>
            <img src={rivalry} alt="rivalry" />
            <Papers> 
            <a href="https://dailybruin.com">
              <img src={db} alt="Daily Bruin" />
            </a>            
              <Addition> 
              <img src={x} alt="and" />
              </Addition>
              <a href="https://dailytrojan.com">
              <img src={dt} alt="Daily Trojan" />
            </a>  
            </Papers>
            </Image>
        </Display>
    )
}
