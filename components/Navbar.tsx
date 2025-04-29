"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 text-white px-6 py-4 shadow-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide glow-text">T.R.U.S.T</h1>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl z-50"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Fullscreen Menu */}
      <div
        className={`fixed inset-0 flex flex-col items-center justify-center bg-black text-white text-2xl font-semibold transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#" onClick={() => setMenuOpen(false)}>Devlogs</a>
        <a href="#" onClick={() => setMenuOpen(false)}>Connect</a>
        <a href="#" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#" onClick={() => setMenuOpen(false)}>Donate</a>
      </div>
    </nav>
  );
};

  