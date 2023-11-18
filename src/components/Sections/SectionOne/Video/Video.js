import React from "react";

const Video = () => {
  return (
    <video
      className='absolute h-screen w-full object-cover'
      src='/videos/background/bg.mp4'
      autoPlay
      loop
      muted
    ></video>
  );
};

export default Video;
