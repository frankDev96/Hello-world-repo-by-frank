import React, { useState } from 'react';
import styles from './styles.css'
const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={'header'} >
      <h2>Select an option:</h2>
      <select value={selectedOption} onChange={handleSelect}>
        <option value="">-- Select --</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <p>Selected option: {selectedOption}</p>
    </div>
  );
};

export default Dropdown;
