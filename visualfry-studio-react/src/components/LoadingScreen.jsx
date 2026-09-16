import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Short delay to ensure animation is seen and assets are ready
      setTimeout(() => setIsLoading(false), 2000);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!isLoading) return children;

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <img src="/logo.png" alt="Visualfry Studio" className="loading-logo" />
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
