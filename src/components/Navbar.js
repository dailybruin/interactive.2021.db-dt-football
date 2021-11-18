import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 75%;
    justify-content: space-around;
    font-family: "Press Start 2P", cursive;
    color: white;
    padding: 1% 5% 1% 5%;
`;

const Link = styled.a`
    color: white;
    text-decoration: none;
`;

const Navbar = () => {
    return (
        <Wrapper>
            <Link href="https://dailybruin.com" target="_blank" rel="noreferrer nopener">COLLAB STORY</Link>
            <Link href="https://dailybruin.com" target="_blank" rel="noreferrer nopener">NORMAL STORIES</Link>
            <Link href="https://dailybruin.com" target="_blank" rel="noreferrer nopener">INTERACTIVE</Link>
            <Link href="https://dailybruin.com" target="_blank" rel="noreferrer nopener">COLLAB PODCAST</Link>
        </Wrapper>
    )
}

export default Navbar;