import React from 'react';

const Button = ({ type, value }) => {
  return (
    <button type={type} className="px-2 py-2 appearance-none border border-black rounded-none outline-none hover:bg-green focus:bg-green">
      {value}
    </button>
  )
};

export default Button;
