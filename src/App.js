import React, { useState } from 'react';
import './App.css';
import {Alfabeto} from "./components/Alfabeto";
import {Morse} from "./components/Morse";

const App = () => {
  const [value, setValue] = useState('');

  return (
    <div className = "App">
      <h1>Traductor de código morse</h1>
      <Alfabeto value={value} setValue={setValue} />
      <Morse value = {value} setValue={setValue}/>
      <footer>

      </footer>
    </div>
  );
}

export default App;
