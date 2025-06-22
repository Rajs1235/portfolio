import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Raj Srivastava",
          from_email: form.email,
          to_email: "raj25oct2003@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className='w-full flex flex-col md:flex-row gap-12 px-6 md:px-16 py-12 text-black font-sans'>
      {/* Form Section */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.7] bg-white p-8 rounded-md border border-gray-300 shadow-sm'
      >
        <h2 className='text-2xl font-bold mb-6 border-b pb-2'>Get in Touch</h2>
        <form ref={formRef} onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label className='block text-sm font-medium mb-1'>Full Name</label>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Enter your name'
              required
              className='w-full border border-gray-400 px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-black'
            />
          </div>
          <div>
            <label className='block text-sm font-medium mb-1'>Email</label>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Enter your email'
              required
              className='w-full border border-gray-400 px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-black'
            />
          </div>
          <div>
            <label className='block text-sm font-medium mb-1'>Message</label>
            <textarea
              name='message'
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder='Type your message here'
              required
              className='w-full border border-gray-400 px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-black'
            />
          </div>
          <button
            type='submit'
            className='bg-black text-white px-6 py-2 rounded hover:opacity-90 transition-all'
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      {/* Info Section */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='flex-[0.3] border border-gray-300 p-6 rounded-md shadow-sm bg-white h-fit'
      >
        <h3 className='text-xl font-semibold mb-4'>Raj Srivastava</h3>
        <ul className='text-sm space-y-3'>
          <li>
            <strong>Email:</strong>{" "}
            <a href='mailto:raj25oct2003@gmail.com' className='text-blue-600'>
              raj25oct2003@gmail.com
            </a>
          </li>
          <li>
            <strong>Phone:</strong> +91-9589436921
          </li>
          <li>
            <strong>GitHub:</strong>{" "}
            <a
              href='https://github.com/Rajs1236'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600'
            >
              github.com/Rajs1236
            </a>
          </li>
          <li>
            <strong>Location:</strong> MANIT Bhopal, India
          </li>
          <li>
            <strong>Roll No:</strong> 2211101133
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

