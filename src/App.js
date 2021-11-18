import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Collaborative from "./Components/Collaborative";

function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("<TODO: insert api url here>")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  return (
    <div className="App">
      <Collaborative/>
    </div>
  );
}

export default App;
