import React, { useState, useEffect } from "react";
import './App.css';
import styled from 'styled-components';
import Grid2 from "./components/Grid2";
import bg from "./images/bg.svg";

const Background = styled.div`
    background-color: #242424;
    background-image: url(${bg});
    background-size: cover;
    background-position: top;
    padding: 200px 50px 200px 50px;
    //need to be deleted

`
function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("<TODO: insert api url here>")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  return (
    <Background>
        <Grid2/>
    </Background>
    
  );
}

export default App;
