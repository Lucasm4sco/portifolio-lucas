import React, { useState } from "react";
import './App.css';
import Header from "./components/Header";
import ContentBanner from "./components/ContentBanner";

const App = () => {
  
  const [ darkMode, setDarkMode ] = useState(false);


  return(
    <div className="App">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <ContentBanner />
    </div>
)};

export default App;
