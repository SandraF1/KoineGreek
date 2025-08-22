import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"; // optional, for styling

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#333", color: "#fff" }}>
      <ul style={{ display: "flex", listStyle: "none", gap: "1rem", margin
: 0, padding: 0 }}>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "yellow" : "white",
              textDecoration: "none",
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? "yellow" : "white",
              textDecoration: "none",
            })}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/learn"
            style={({ isActive }) => ({
              color: isActive ? "yellow" : "white",
              textDecoration: "none",
            })}
          >
            Learn
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/terms"
            style={({ isActive }) => ({
              color: isActive ? "yellow" : "white",
              textDecoration: "none",
            })}
          >
            Terms
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              color: isActive ? "yellow" : "white",
              textDecoration: "none",
            })}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
