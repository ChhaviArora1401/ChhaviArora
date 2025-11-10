"use client";
export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center transition-colors duration-500 parallax bg-[linear-gradient(#ffffffa2,#ffffffe6),url('/light.jpg')] dark:bg-[linear-gradient(#0000008b,#000000e6),url('/dark.webp')]"
    >
      <main className="p-12 max-w-3xl fade-up">

        <h1 className="text-4xl font-bold text-gray-900 dark:text-zinc-100">
          Hello, I am Chhavi Arora <br/>
          Frontend Developer
        </h1>

        <p className="mt-3 pt-5 text-2xl text-gray-700 dark:text-zinc-300">
          Front-End Developer passionate about creating interactive web experiences.
        </p>

        <div className="mt-6 flex gap-4">
        <a
          href="https://docs.google.com/document/d/1YNo2Yc4HaAGrK0Q5VUFyzYnjzZkdqt8lhQlAA0eYMKg"
          target="_blank"
        >
          <button className="px-6 py-4 text-xl border-1 rounded bg-black text-white dark:bg-white dark:text-black font-semibold">
            Hire Me
          </button>
        </a>
        <a href="#work">
          <button
            className="p-4 rounded border-1 border-white-500 text-white-500 dark:border-zinc-300 dark:text-zinc-300 font-semibold text-xl hover:bg-white/10 dark:hover:bg-zinc-700/50 transition">
            See My Work
          </button>
        </a>
        </div>
      </main>
    </section>
  );
}