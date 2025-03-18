import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Volunteer from "./pages/Volunteers";

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">ElderlyCare</Link>
          <div>
            <Link className="nav-link text-white" to="/services">Services</Link>
            <Link className="nav-link text-white" to="/volunteer">Volunteer</Link>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
    </div>
  );
};

export default App;
