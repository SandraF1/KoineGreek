import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Learn from "./pages/Learn/Learn";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";

export default function App() {
  const [unitIds, setUnitIds] = useState([1]);

  return (
    <>
      {/* Navbar always full-width */}
      <Navbar />

      {/* Page content in a fixed container */}
      <div className="container my-4">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/learn/*"
              element={<Learn unitIds={unitIds} setUnitIds={setUnitIds} />}
            />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </>
  );
}
