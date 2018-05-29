import React from 'react';

const Dropdown = ({ value, options, onChange }) => (
  <select value={value}>
    {options.map(option => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default Dropdown;
