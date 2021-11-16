import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Landing from './components/Landing';

function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("<TODO: insert api url here>")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  return (
    <div className="App">
      <Landing/>

    </div>
  );
}

export default App;
