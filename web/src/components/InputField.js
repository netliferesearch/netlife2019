/**
 * InputField component initially for text. Could be extended for email, password etc.
 */
import React from 'react';

const InputField = ({ inputType, labelText, placeholder, value, onChange }) => {
  console.log(value);
  return (
    <>
      <label className="cursor-pointer">
        {labelText}
        <input 
          className="w-full mt-1 pl-2 py-1 appearance-none placeholder-smoke border border-black rounded-none outline-none focus:bg-green"
          type={inputType} placeholder={placeholder || ''} value={value} onChange={(e) => onChange(e.currentTarget.value)} />
      </label>
    </>
  );
};

export default InputField;