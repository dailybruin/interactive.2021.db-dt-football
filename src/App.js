import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Grid1 from "./components/Grid1";
import Grid1Mobile from "./components/Grid1Mobile";

function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/interactive.2021.db-dt-football")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  return (
    <div className="App">
      {/* {console.log(data)} */}
      <Grid1/>
      
    </div>
  );
}

export default App;
