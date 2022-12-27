import React, { useState } from "react";
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  )
};

export default App;
