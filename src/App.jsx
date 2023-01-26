import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import GenerateImage from "./components/GenerateImage";
import MainChat  from "./components/MainChat";
import MainScreen  from "./MainScreen";

function App() {
  return (
    <div className="app-main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/mainchat" element={<MainChat />} />
          <Route path="/generateImage" element={<GenerateImage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

