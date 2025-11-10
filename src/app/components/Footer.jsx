"use client";
import { useState } from "react";

export default function Footer() {
  const [year] = useState(new Date().getFullYear());

  return (
    <footer className="text-black bg-white dark:text-zinc-100 dark:bg-black border-t border-[#62626234] dark:border-t dark:border-zinc-800">
      <div className="px-6 py-20 text-center">© <span>{year}</span> developed by Chhavi Arora.</div>
    </footer>
  );
}
