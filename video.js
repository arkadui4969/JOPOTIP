import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  return (
    <video autoPlay loop muted playsInline className='backgraund_video'>
    <source src="/trailer.mp4" type="video/mp4" />
    Ваш браузер не поддерживает видео-тег.
  </video>

  );
};

export default VideoPlayer;