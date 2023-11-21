import React from "react";

const Grid = (props) => {
  return (
    <div className='grid w-full grid-cols-4 gap-8 sm:grid-cols-4 sm:gap-12 md:grid-cols-6 md:gap-10 lg:grid-cols-8 lg:gap-12'>
      {props.children}
    </div>
  );
};

export default Grid;
