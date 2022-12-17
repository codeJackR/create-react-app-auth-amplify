import React from 'react';
// import logo from './logo.svg';
import {NavBar, BrowseInfluencers} from "./ui-components";
import './App.css';

function App() {



  const navbarOverrides = {
    "image": {
        src: "https://www.bootdey.com/app/webroot/img/Content/avatar/avatar1.jpg"
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
