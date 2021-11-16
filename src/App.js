import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Navbar from "./components/Navbar";

function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("<TODO: insert api url here>")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  return (
    <Navbar />

    // </Navbar>
  );
}

export default App;
