import React from 'react';
import './App.css';
import CardData from "./components/CardData";
import styled from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const SuperDiv = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-evenly;
  `;

  const SuperH1 = styled.h1 `
    font-size: 5rem;
    margin: 0;
    background-color: black;
    color: white;
    padding: 3vh 0;
  `;

  return (
    <div className="App">
      <SuperH1 className="Header">React Wars</SuperH1>
      <SuperDiv>
        <CardData />
      </SuperDiv>
    </div>
  );
}

export default App;
