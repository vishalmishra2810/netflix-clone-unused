import React from "react";
import "./App.css";
import Row from './Row';
import requests from './requests'

function App() {
  return (
    <div className="App">
      <h1>Hey Vishal Mishra!</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="NETFLIX NOW" fetchUrl={requests.fetchTrending}/>
      
    </div>
  );
}

export default App;
