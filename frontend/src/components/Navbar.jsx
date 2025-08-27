import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"; // optional, for styling

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/learn">Learn</NavLink>
        </li>
        <li>
          <NavLink to="/terms">Terms</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
