"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setMounted(true);
    const current = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
    setTheme(current);
  }, []);

  if (!mounted) return null;

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);

    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggle}
      className="fixed top-4 right-4 p-3 rounded cursor-pointer text-black bg-zinc-200 dark:bg-zinc-800 dark:text-white"
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
