import React from "react";

const HomeVideo = () => {
  return (
    <video
      autoPlay
      muted
      loop
      id='myVideo'
      className='absolute z-0 h-5/6 w-full object-cover'
    >
      <source src='/videos/background/bg.mp4' type='video/mp4' />
    </video>
  );
};

export default HomeVideo;
