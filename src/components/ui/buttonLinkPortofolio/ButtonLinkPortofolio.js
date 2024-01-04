import React from "react";

const ButtonPortofolio = ({ name, onSelect, isSelected }) => {
  return (
    <button
      type='button'
      className={`block  ${
        isSelected ? "text-gray-400 " : " text-white hover:text-my-color"
      }`}
      onClick={onSelect}
    >
      {name}
    </button>
  );
};

export default ButtonPortofolio;
