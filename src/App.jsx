import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import React, { useState } from "react";

import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "Java", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 75 },
  { name: "HTML & CSS", level: 95 },
  { name: "DSA", level: 85 },
  { name: "SQL / MongoDB", level: 80 },
];

const languages = [
  { name: "English", stars: 5 },
  { name: "Hindi", stars: 5 },
  { name: "Marathi", stars: 5 },
  { name: "Kannada", stars: 3 },
];

const projects = [
  {
    name: "Forensic Video Analysis System (Ongoing)",
    description:
      "Python, OpenCV, NumPy – Real-time forensic video analysis with histogram-based frame comparison and automated reporting.",
    github: "#",
    demo: "#",
  },
  {
    name: "Object Detection System",
    description:
      "Python, Deep Learning, CSS, HTML – Real-time object detection for behavior analysis foundation.",
    github: "#",
    demo: "#",
  },
  {
    name: "E-commerce Website for Stationery Products",
    description:
      "Java, Backend APIs, Database Connectivity, HTML, CSS, JS – Full-stack e-commerce web app.",
    github: "https://github.com/Aditi1625",
    demo: "#",
  },
];

const achievements = [
  "1st Prize – Global Mandate 2.0, Walchand College of Engineering, Sangli",
  "1st Prize – National Level Ideathon, Government College of Engineering, Karad",
  "1st Prize – Vertex 2.0, Walchand College of Engineering, Sangli",
  "Participated – OJEPX 2024 (Regional Engineering Project Expo)",
  "Participated – e-Yantra Innovation Challenge (eYIC 2024–25)",
  "Participated – VPHT Hackathon (Team-based Coding Event)",
];

export default function App() {
  const [page, setPage] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="font-sans text-gray-900 h-screen w-screen overflow-hidden relative">
      {/* Page 1: Hero */}
      {page === 1 && (
        <motion.section
          className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-white text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.h1
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold mb-4"
          >
            Hi, I'm Aditi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-2xl mb-6"
          >
            Full-Stack Developer | MERN | Java | DSA Enthusiast
          </motion.p>
          <motion.button
            onClick={() => setPage(2)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            View My Portfolio
          </motion.button>
        </motion.section>
      )}

      {/* Page 2: Detailed Portfolio */}
      {page === 2 && (
        <motion.section
          className="h-screen overflow-y-auto max-w-4xl mx-auto py-10 px-6 space-y-12 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* Menu Icon */}
          <div className="fixed top-6 right-6 z-50">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-3xl text-gray-700"
            >
              <AiOutlineMenu />
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-56 text-left">
                {["About", "Skills", "Projects", "Achievements", "Experience", "Languages", "Contact"].map((sec, idx) => (
                  <p
                    key={idx}
                    onClick={() => scrollTo(sec.toLowerCase())}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {sec}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* About Me */}
          <motion.div
            id="about"
            className="bg-white p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-800">About Me</h2>
            <p className="text-lg leading-relaxed mb-2">
              Driven Computer Science Engineering student with strong proficiency in Java and solid foundation in Data Structures & Algorithms.
            </p>
            <p className="text-lg leading-relaxed">
              Hobbies: brainstorming, ideation, problem-solving, and staying updated on technology trends.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            id="skills"
            className="bg-white p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-800">Technical Skills</h2>
            <div className="space-y-4">
              {skills.map((skill, idx) => (
                <div key={idx}>
                  <h3 className="text-lg font-medium mb-1">{skill.name}</h3>
                  <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2 }}
                      className="h-4 bg-gradient-to-r from-blue-600 to-teal-400 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Projects */}
          <motion.div
            id="projects"
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-800">Projects</h2>
            {projects.map((proj, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-2">{proj.name}</h3>
                <p className="text-gray-800 mb-4">{proj.description}</p>
                <div className="flex gap-4">
                  <a href={proj.github} className="text-blue-700 font-semibold hover:underline" target="_blank" rel="noreferrer">GitHub</a>
                  <a href={proj.demo} className="text-blue-700 font-semibold hover:underline" target="_blank" rel="noreferrer">Live Demo</a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievements */}
          <motion.div
            id="achievements"
            className="bg-white p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-800">Achievements</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              {achievements.map((ach, idx) => (
                <li key={idx}>{ach}</li>
              ))}
            </ul>
          </motion.div>

          {/* Experience */}
          <motion.div
            id="experience"
            className="bg-white p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-800">Experience</h2>
            <p className="text-lg font-semibold">
              Web Development Intern | MERN Stack – ArrayLogic Softwares Pvt. Ltd.
            </p>
            <p className="text-lg leading-relaxed">
              Built responsive UIs using React.js, Tailwind CSS, HTML, and CSS. Worked with JavaScript, Node.js, and SQL for backend logic and data handling.
            </p>
          </motion.div>

          {/* Languages */}
          <motion.div
            id="languages"
            className="bg-white p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-800">Languages Spoken</h2>
            <div className="space-y-2">
              {languages.map((lang, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-32">{lang.name}</span>
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-yellow-400 ${i < lang.stars ? "" : "text-gray-300"}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            id="contact"
            className="bg-white p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-800">Contact Me</h2>
            <p className="text-lg mb-1">
              Email: <a href="mailto:kagwadeaditi@gmail.com" className="text-blue-700 hover:underline">kagwadeaditi@gmail.com</a>
            </p>
            <p className="text-lg mb-1">
              Phone: <a href="tel:+918459716733" className="text-blue-700 hover:underline">+91 8459716733</a>
            </p>
            <p className="text-lg mb-1">
              LinkedIn: <a href="https://www.linkedin.com/in/aditi-kagwade-927425299" target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">linkedin.com/in/aditi-kagwade-927425299</a>
            </p>
            <p className="text-lg mb-1">
              GitHub: <a href="https://github.com/Aditi1625" target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">github.com/Aditi1625</a>
            </p>
            <p className="text-lg mb-1">
              LeetCode: <a href="https://leetcode.com/your-leetcode-username" target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">leetcode.com/your-leetcode-username</a>
            </p>
          </motion.div>
        </motion.section>
      )}
    </div>
  );
}