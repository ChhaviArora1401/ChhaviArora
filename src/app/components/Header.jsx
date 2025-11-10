"use client";

export default function Header({ onToggle }) {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      <button
        onClick={onToggle}
        className="p-2 rounded-md bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100"
      >
        ☰
      </button>
    </header>
  );
}
