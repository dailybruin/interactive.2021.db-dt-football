import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Collaborative from "./Components/Collaborative";
import './App.css';

const Container = styled.div`
    padding: 50px;
`;

function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("<TODO: insert api url here>")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  return (
    <div className="App">
      <Container>
        <Collaborative/>
      </Container>
      
    </div>
  );
}

export default App;
