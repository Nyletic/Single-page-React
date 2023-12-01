import React from "react"
import Header from "./components/Header"
import Feature from "./components/Feature"
import About from "./components/About"
import aboutImage from "./images/about.png"
import aboutImage1 from "./images/download.png"
import Presentation from "./components/Presentation"
import Contacts from "./components/Contacts"
import './App.css';

const App = () => {
  return (
    <div>
      <Header/>
      <Feature/>
      <About image={aboutImage} title="Lorem ipsum dolor" button="Download"/>
      <Presentation/>
      <About image={aboutImage1} title="Lorem" button="Skini"/>
      <Contacts/>
    </div>
  );
}

export default App;
