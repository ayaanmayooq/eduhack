import React from 'react';

const Option = ({ text }) => {
  return (
    <label className="block mb-2">
      <input type="radio" className="mr-2" />
      {text}
    </label>
  );
};

export default Option;
