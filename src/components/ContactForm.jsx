import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) errs.email = "Valid email required.";
    if (!form.message.trim()) errs.message = "Message required.";
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="max-w-xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-indigo mb-8 text-center">Contact</h2>
      <form onSubmit={handleSubmit} className="bg-slatecard/80 rounded-2xl shadow-xl p-8 flex flex-col gap-5 border border-slate-700">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="px-4 py-2 rounded bg-midnight text-white border border-slate-600 focus:border-indigo outline-none"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <span className="text-red-400 text-sm">{errors.name}</span>}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="px-4 py-2 rounded bg-midnight text-white border border-slate-600 focus:border-indigo outline-none"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <span className="text-red-400 text-sm">{errors.email}</span>}
        <textarea
          name="message"
          placeholder="Your Message"
          className="px-4 py-2 rounded bg-midnight text-white border border-slate-600 focus:border-indigo outline-none min-h-[120px]"
          value={form.message}
          onChange={handleChange}
        />
        {errors.message && <span className="text-red-400 text-sm">{errors.message}</span>}
        <button
          type="submit"
          className="bg-indigo text-white font-semibold py-2 rounded hover:bg-emerald transition"
        >
          Send Message
        </button>
        {submitted && <span className="text-emerald text-center font-medium">Thank you! Your message has been received.</span>}
      </form>
    </section>
  );
}
