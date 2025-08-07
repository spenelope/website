import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, success: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure environment variables are set
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Environment variables for EmailJS are not set correctly.");
      setStatus({ loading: false, success: false });
      return;
    }

    setStatus({ loading: true, success: null });

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Jonghyuk Lee",
        },
        publicKey
      )
      .then(
        () => {
          setStatus({ loading: false, success: true });
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("Failed to send email:", error);
          setStatus({ loading: false, success: false });
        }
      );
  };

  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      className="max-w-md mx-auto p-6 bg-neutral-900 text-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 bg-neutral-800 text-white rounded-lg border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 bg-neutral-800 text-white rounded-lg border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 bg-neutral-800 text-white rounded-lg border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className={`w-full py-2 px-4 rounded-lg text-white font-semibold transition duration-300 ${
            status.loading
              ? "bg-purple-400 cursor-not-allowed"
              : "bg-purple-600 hover:bg-purple-700"
          }`}
          disabled={status.loading}
        >
          {status.loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status.success === true && (
        <p className="mt-4 text-green-500 text-center">
          Your message has been sent successfully!
        </p>
      )}
      {status.success === false && (
        <p className="mt-4 text-red-500 text-center">
          Oops! Something went wrong. Please try again later.
        </p>
      )}
    </motion.div>
  );
};

export default Contact;