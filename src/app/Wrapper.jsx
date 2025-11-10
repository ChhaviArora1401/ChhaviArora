"use client";

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";

export default function Wrapper({ children }) {
  const [isSideOpen, setIsSideOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const toggleSide = () => setIsSideOpen(prev => !prev);
  const closeSide = () => setIsSideOpen(false);

  // ✅ Prevent DOM changes until AFTER hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;     

    document.body.classList.toggle("lock-screen", isSideOpen);
    return () => document.body.classList.remove("lock-screen");
  }, [isSideOpen, mounted]);

  if (!mounted) {
    // ✅ Render static shell to avoid hydration mismatch
    return <main>{children}</main>;
  }

  return (
    <>
      <Header onToggle={toggleSide} />
      <Sidebar isOpen={isSideOpen} onClose={closeSide} />
      <ThemeToggle />

      <main>{children}</main>

      <Footer />
    </>
  );
}
