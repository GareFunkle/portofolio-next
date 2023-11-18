import React from "react";

const Grid = (props) => {
  return <div className='grid w-full grid-cols-8 gap-12'>{props.children}</div>;
};

export default Grid;
