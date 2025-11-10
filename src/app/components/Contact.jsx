"use client";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setSubmitted(true);
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section className="py-20 px-6 flex justify-center dark:bg-black">
      <div
        className="max-w-5xl w-full border border-zinc-800 rounded-2xl p-10 grid grid-cols-1 md:grid-cols-2 gap-10 dark:text-white">
        {/* Left side */}
        <div className="flex flex-col justify-between">
          <div>
            <span
              className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm border border-zinc-700">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Available for hire
            </span>

            <p className="mt-6 dark:text-zinc-300 leading-relaxed">
              I love building modern interfaces that feel simple, fast, and enjoyable to use.
              I focus on clean code, thoughtful design, and smooth interactions.
              Transforming ideas into real, interactive experiences is my favourite part.
            </p>

            <p className="mt-6 dark:text-zinc-300 leading-relaxed">
              Let’s connect — feel free to reach out below.
            </p>
          </div>

          <div className="mt-10">
            <span className="text-3xl font-semibold">Chhavi Arora</span>
          </div>
        </div>

        {/* Right side — Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          {/* Name */}
          <div>
            <label className="block text-sm mb-2 text-zinc-400">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`w-full bg-transparent border-b pb-2 focus:outline-none text-zinc-200 ${errors.name ? "border-red-500" : "border-zinc-700"}`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-2 text-zinc-400">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full bg-transparent border-b pb-2 focus:outline-none  text-zinc-200 ${errors.email ? "border-red-500" : "border-zinc-700"}`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm mb-2 text-zinc-400">
              How can I help you?
            </label>
            <textarea
              rows="3"
              name="message"
              value={form.message}
              onChange={handleChange}
              className={`w-full bg-transparent border-b pb-2 focus:outline-none  text-zinc-200 resize-none ${errors.message ? "border-red-500" : "border-zinc-700"}`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-4 w-fit px-8 py-3 bg-black text-white dark:bg-white dark:text-black rounded-xl font-semibold hover:bg-zinc-200 transition ">
            Send
          </button>

          {submitted && (
            <p className="text-green-500 text-sm">Message sent successfully ✅</p>
          )}
        </form>
      </div>
    </section>)
}






export default Contact