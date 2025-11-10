"use client";
import { useEffect, useRef } from "react";

export default function Sidebar({ isOpen, onClose, onToggle }) {
  const navRef = useRef(null);

  // ESC → close
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  return (
    <nav
      ref={navRef}
      className={`nav ${isOpen ? "" : "hidden"} !bg-gradient-to-br from-[#fde1e8] to-[#f8c5d3]`}
    >
      <button
        className="menu-btn"
        onClick={onClose}
      >
        {isOpen ? "X" : "Menu"}
      </button>

      <ul
        className="nav-items"
        onClick={(e) => {
          if (e.target.localName === "a") onClose();
        }}
      >
        <li><a href="#work">Work</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
