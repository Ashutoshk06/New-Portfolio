import React from 'react';
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion'; // Import motion from framer-motion
import airline from "../assets/airline.jpg";
import chatapp from "../assets/chatapp.jpg";
import Elearning from "../assets/Elearning.jpg";
import pgperfect from "../assets/pgperfect.jpg";
import tweet from "../assets/tweet.jpg";

const projects = [
  {
    img: pgperfect,
    title: "PG PERFECT",
    description: "A generalised pg management and accommodation software solution to handle all the tasks in pg management facilitated by rent collection and payment option",
    links: "#",
    github: "#"
  },
  {
    img: Elearning,
    title: "Elearning",
    description: "A one-stop solution for all educators and students to learn new technology. In this project, educators can upload and sell their courses, and students can purchase the courses.",
    links: "#",
    github: "#"
  },
  {
    img: airline,
    title: "Airline Booking System",
    description: "This project is the backend service for Airline Ticket Booking with a reminder service before flight timings.",
    link: "#",
    github: "#"
  },
  {
    img: tweet,
    title: "Tweet Backend Service",
    description: "This is the backend for the tweet service with like and comment functionality.",
    link: "#",
    github: "#"
  },
  {
    img: chatapp,
    title: "ChatApp",
    description: "This is a full-stack chat app made with MERN and SOCKET.IO.",
    link: "#",
    github: "#"
  }
];

const Portfolio = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">

      
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Portfolio</h2>

      {projects.map((project, index) => (
        <motion.div
          key={index}
          className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}
          initial={{ opacity: 0, y: 50 }} // Start animation properties
          whileInView={{ opacity: 1, y: 0 }} // End animation properties
          transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered transition
          viewport={{ once: true }} // Trigger animation only once when in view
        >
          <div className="w-full md:w-[50%] p-4">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex space-x-4">
              <a
                href={project.link}
                className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300 text-lg"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
     
    </div>
  );
};

export default Portfolio;
