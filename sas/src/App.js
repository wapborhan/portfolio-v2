import React, { useState, useEffect } from "react";
//
import { Routes, Route } from "react-router-dom";
// Components
import HomePage from "./home";
import NotFound from "./components/NotFound";
import Preloader from "./components/Preloader";
import InfoBar from "./components/InfoBar";
import MenuBar from "./components/MenuBar";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="art-app">
      <div className="art-app-wrapper">
        <div className="art-app-container">
          <InfoBar />

          {isLoading ? (
            <Preloader />
          ) : (
            <div className="art-content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          )}

          <MenuBar />
        </div>
      </div>
    </div>
  );
};

export default App;
