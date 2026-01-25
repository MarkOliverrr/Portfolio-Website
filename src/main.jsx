// src/main.jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Preloader from './components/Preloader.jsx'; 
import './index.css';

/**
 * Main wrapper component that manages the loading state
 * and switches between the Preloader and the main application.
 */

const Main = () => {
 // State to track whether the preloader is still active
  const [isLoading, setIsLoading] = useState(true);

// Callback function that will be called by the Preloader when its animation is finished
  const handlePreloaderFinished = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Conditionally renders the Preloader or App based on the 'isLoading' state. */
}
      {isLoading ? (
        <Preloader onFinished={handlePreloaderFinished} />
      ) : (
        <App />
      )}
    </>
  );
};
// Render the Main component into the DOM

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);
