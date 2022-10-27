import React from 'react'

export const Morse = (props) => {

    console.log(props.value);
    const handleChange = (event) => {
      props.setValue(event.target.value);
    }
    return (
      <div className="input">
      <h2>Código morse</h2>
      <textarea 
        value={props.value} 
        onChange={handleChange}
        placeholder="Escriba su mensaje en código morse aquí" 
      />
    </div>
    );
  }
