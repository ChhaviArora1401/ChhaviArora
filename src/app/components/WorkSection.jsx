"use client";
import { Works } from "../utils/data";

export default function WorkSection() {
  return (
    <section id="work" className="Works dark:bg-black p-6">
      <h1 className="text-3xl font-bold text-center mb-12 dark:text-white">
        My Works
      </h1>

      {Works.map((w, i) => (
        <div
          key={i}
          className="flex flex-col md:flex-row items-start gap-12 mb-24 dark:text-white px-20">
          {/* RIGHT — IMAGE */}
          <div className="md:flex-shrink-0 md:w-auto flex justify-center md:justify-end">
            <img
              src={w.src}
              className="work-img w-full max-w-lg rounded-xl shadow-xl object-cover" />
          </div>

          {/* LEFT — TEXT */}
          <div className="work-text md:flex-1">
            <h3 className="text-2xl font-semibold mb-4">{w.heading}</h3>

            <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
              {w.desc}
            </p>

            <ul className="list-disc list-inside space-y-2 text-lg text-zinc-700 dark:text-zinc-300 mb-8">
              {w.techstats.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>

            <a
              href={w.livelink}
              target="_blank"
              className="inline-flex items-center gap-3 text-lg font-semibold group">
              <span className="border-b border-transparent  group-hover:border-black dark:group-hover:border-white transition">
                Project Link
              </span>
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}