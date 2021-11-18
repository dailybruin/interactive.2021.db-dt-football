import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Grid2 from "./components/Grid2"

function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("<TODO: insert api url here>")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  return (
    <Grid2></Grid2>
  );
}

export default App;
