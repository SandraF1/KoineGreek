// src/App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

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
  // State to track selected unit(s)
  const [unitIds, setUnitIds] = useState([1]); // default: unit 1

  return (
    <Container className="my-4">
      <Navbar />

      <main style={{ padding: "1rem" }}>
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

      <Footer />
    </Container>
  );
}
