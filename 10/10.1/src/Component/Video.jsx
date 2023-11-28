import video from '../assets/Nature-Beautiful.mp4'
import React from 'react';

function Video({videoRef}) {
  return (
    <div>
      <video ref={videoRef}>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video