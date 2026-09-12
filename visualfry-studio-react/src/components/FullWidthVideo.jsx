import React from 'react';

const FullWidthVideo = () => {
  return (
    <div className="video-section">
      <div className="wrap">
        <video
          className="full-width-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default FullWidthVideo;
