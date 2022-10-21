import React, { useState } from 'react';
import './App.css';
import Input from "./components/input";
import Output from "./components/output";
import { encode, decode } from 'morsee';

const App = () => {
  const [value, setValue] = useState('');

  return (
    <div className = "App">
      <h1>Traductor de código morse</h1>
      <Input value={value} setValue={setValue} />
      <Output value = {value} setValue={setValue}/>
      <footer>
          
      </footer>
    </div>
  );
}

export default App;