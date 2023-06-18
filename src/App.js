import React from "react";
//
import { Routes, Route } from "react-router-dom";
// Components
import HomePage from "./home";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
