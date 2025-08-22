import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "2rem",
        padding: "1rem",
        backgroundColor: "#333",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <p>&copy; {new Date().getFullYear()} My React Learning App. All rights reserved.</p>
    </footer>
  );
}
