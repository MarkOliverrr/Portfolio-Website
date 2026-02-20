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
 const [isLoading, setIsLoading] = useState(true);

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
  <Main />
);
