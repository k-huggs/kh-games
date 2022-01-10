import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Styles
import { GlobalStyle } from "./GlobalStyles";
import "./App.css";

// Components
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <Router>
      {/* <NavBar /> */}
      <LoginPage />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;
