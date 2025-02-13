import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import WebTeam from "./components/webTeam";
import CoreTeam from "./components/CoreTeam";
import FacultyTeam from "./components/FacultyTeam";
import AdminLogin from './admin/AdminLogin';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/webteam" element={<WebTeam />} />
        <Route path="/Coreteam" element={<CoreTeam />} />
        <Route path="/FacultyTeam" element={<FacultyTeam />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
};

export default App;
