import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: "Press Start 2P", cursive;
    color: white;
    /* padding: 1% 5% 30px 5%; */
    ${mediaQueries.tablet} {
        flex-direction: column;
        font-size: 12px;
        margin-bottom: 30px;
    }
`;

const Link = styled.a`
    color: white;
    text-decoration: none;
    padding: 0px 3% 4% 3%;
    ${mediaQueries.tablet} {
        padding: 10px 50px 10px 50px;;
    }
`

const Navbar = () => {
    return (
        <Wrapper>
            <Link href="#1" >INTERACTIVE</Link>
            <Link href="#2" >COLLABORATION</Link>
            <Link href="#3" >STORIES</Link>
            <Link href="#4" >PODCAST</Link>
        </Wrapper>
    )
}

export default Navbar;