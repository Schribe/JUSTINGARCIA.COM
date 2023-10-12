import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Gallery from "./components/Gallery";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
      <Routes>
        <Route exact path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
