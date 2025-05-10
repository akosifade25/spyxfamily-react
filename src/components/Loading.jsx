import { useState, useEffect } from 'react';
import loadingGif from '../assets/loading.gif';

const Loading = () => {
  const [loadingText, setLoadingText] = useState('Loading');

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText(prev => prev.length < 9 ? prev + '.' : 'Loading');
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-container">
      <div className="loading-content">
        <img src={loadingGif} alt="Loading..." className="loading-gif" />
        <p className="loading-text">{loadingText}</p>
      </div>
    </div>
  );
};

export default Loading;
