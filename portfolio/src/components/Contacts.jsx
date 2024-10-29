import React, { useState } from 'react';
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";
import Reveal from './Reveal';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setResponseMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResponseMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setResponseMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">About <span>Me</span></h3>
              <p className="text-justify leading-7 w-11/12">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit...
              </p>
            </div>

            <div className="flex mt-10 items-center gap-7">
              <div className="bg-gray-800/40 p-4 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">10<span>+</span></h3>
                <p className="text-xs md:text-base"><span>Projects</span></p>
              </div>
              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">8.7<span className="text-sm">AVG</span></h3>
                <p className="text-xs md:text-base"><span>CGPA</span></p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="max-w-6xl p-5 md:p-12" id="form">
            <p className="text-gray-100 font-bold text-xl mb-2">Let’s connect!</p>
            <input
              type="text"
              name="name"
              placeholder="Your Name ..."
              value={formData.name}
              onChange={handleChange}
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email ..."
              value={formData.email}
              onChange={handleChange}
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <textarea
              name="message"
              placeholder="Your Message ..."
              value={formData.message}
              onChange={handleChange}
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
            >
              Send Message
            </button>
            {responseMessage && <p className="mt-4 text-sm text-gray-300">{responseMessage}</p>}
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contacts;
