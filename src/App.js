import React from 'react';
// import logo from './logo.svg';
import {NavBar, BrowseInfluencers} from "./ui-components";
import './App.css';

function App() {

  const navbarOverrides = {
    "image": {
        src: "https://cdn.vectorstock.com/i/1000x1000/39/94/varicella-zoster-virus-glyph-icon-vector-33723994.webp"
    }
  }

  return (
    <div className="App">
      <NavBar overrides={navbarOverrides} width="100%" />
      <header className="App-header">
        <h1>InfluNet</h1>
        <BrowseInfluencers />
      </header>
    </div>
  );
}

export default App;
