import React from 'react';
import { decode, encode } from 'morsee';

var regExp = /[a-zA-Z]/g;

const Input = (props) => {
  /**
   * Updates the state when the event target's value is changed
   */
  console.log(props.value);
  const decodedValue = regExp.test(props.value) ? "#" : decode(props.value);
  
  const handleChange = (event) => {
    props.setValue(encode(event.target.value));
  }

  return (
    <div className="input">
      <h2>Alfabeto</h2>
      <textarea 
        value={decodedValue} 
        onChange={handleChange}
        placeholder="Escriba su mensaje aquí" 
      />
    </div>
  );
}

export default Input;