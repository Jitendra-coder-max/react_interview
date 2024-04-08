import React, { useState } from 'react'

const Input = () => {
    const [value, setValue] = useState(localStorage.getItem('inputValue') || '');

  const handleChange = (e) => {
    setValue(e.target.value);
    localStorage.setItem('inputValue', e.target.value);
  };

  return (
    <div>
      <input data-testid='input-id' type="text" value={value} onChange={handleChange} />
    </div>
  );

}

export default Input