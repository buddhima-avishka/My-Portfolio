import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";

import Astronaut from "../models/Astronaut.jsx";
import Loader from "../components/Loader";
import { techStack } from "../assets/assets.jsx";

const About = () => {
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const [visible, setVisible] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const divRef = React.useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* Main Section */}
      <div className="relative min-h-screen pt-20 lg:h-screen w-full flex flex-col lg:flex-row bg-slate-900">
        {/* Left Side - About Me Title and Content */}
        <div className="w-full lg:w-1/2 flex flex-col p-4 sm:p-8 lg:p-16 z-10 overflow-y-auto">
          {/* ABOUT ME Badge */}
          <div className="flex mb-6 lg:mb-8">
            <div className="border border-blue-500/50 rounded-full px-4 sm:px-6 py-2">
              <span className="text-blue-500 text-xs sm:text-sm font-semibold tracking-wider">
                About Me
              </span>
            </div>
          </div>

          {/* Content - Below Title, Left Side */}
          <div className="shrink-0 mb-6 lg:mb-0">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 p-4 sm:p-6 lg:p-8 rounded-2xl hover:border-blue-500/30 transition-all duration-300">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 lg:mb-5">
                    Hi! I'm <span className="text-blue-500">Buddhima Avishka</span>
                  </h3>
                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                    I'm an enthusiastic <span className="text-blue-500 font-semibold"> Software Engineer</span> with a strong passion for creating modern, efficient, and user-focused digital solutions. As an undergraduate pursuing a <span className="text-blue-500 font-semibold">BSc (Hons) in Computing and Information Systems </span> at Sabaragamuwa University of Sri Lanka, I enjoy turning ideas into functional applications through clean code, thoughtful architecture, and a commitment to continuous learning. Beyond development, I love experimenting with emerging technologies, exploring new frameworks, and sharpening my skills to build impactful software experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-6 justify-center lg:justify-start">
              {/* GitHub Icon */}
              <a 
                href="https://github.com/buddhima-avishka" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group w-14 h-14 sm:w-16 sm:h-16 bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl flex items-center justify-center hover:border-blue-500 hover:bg-slate-800/70 hover:scale-110 transition-all duration-300 cursor-pointer"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="28" 
                  height="28" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-slate-400 group-hover:text-blue-500 transition-colors duration-300"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>

              {/* LinkedIn Icon */}
              <a 
                href="https://www.linkedin.com/in/buddhima-avishka-087231240/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group w-14 h-14 sm:w-16 sm:h-16 bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl flex items-center justify-center hover:border-blue-500 hover:bg-slate-800/70 hover:scale-110 transition-all duration-300 cursor-pointer"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-slate-400 group-hover:text-blue-500 transition-colors duration-300"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              {/* Email Icon */}
              <a 
                href="mailto:buddhimaliyanageba@gmail.com" 
                className="group w-14 h-14 sm:w-16 sm:h-16 bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl flex items-center justify-center hover:border-blue-500 hover:bg-slate-800/70 hover:scale-110 transition-all duration-300 cursor-pointer"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="28" 
                  height="28" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-slate-400 group-hover:text-blue-500 transition-colors duration-300"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - 3D Astronaut Model */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Canvas
            camera={{
              position: [0, 0, 5],
              // fov: 75,
              // near: 0.1,
              // far: 1000
            }}
          >
            <directionalLight intensity={2.5} position={[0, 0, 1]} />
            <ambientLight intensity={1} />
            <Suspense fallback={<Loader />}>
              <Astronaut
                currentAnimation={currentAnimation}
                // position={[0, 0, 0]}
                // position={[3, -10, -1]}
                // scale={[2.5, 2.5, 1]}
                position={window.innerWidth < 1024 ? [0, -5, -3] : [3.5, -4.2, -1]}
                scale={window.innerWidth < 1024 ? [2.5, 2.5, 1] : [2.5, 2.5, 1]}
                rotation={[0, -0.2, 0]}
                
              />
            </Suspense>
          </Canvas>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-slate-950 flex flex-col w-full min-h-screen p-8 lg:p-16">
        <div className="max-w-7xl mx-auto w-full">
          {/* SKILLS & EXPERTISE Badge */}
          <div className="flex justify-center mb-8">
            <div className="border border-blue-500/50 rounded-full px-6 py-2">
              <span className="text-blue-500 text-sm font-semibold tracking-wider">
                SKILLS & EXPERTISE
              </span>
            </div>
          </div>
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-slate-400">
              Full-stack development expertise across modern technologies
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(techStack).map(([category, skills], idx) => {
              return (
                <div
                  key={category}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:bg-slate-700/50 hover:border-blue-500/30 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-linear-to-br rounded-xl flex items-center justify-center">
                      {/* <svg
                        className='w-7 h-7'
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4zm0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z" />
                      </svg> */}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-500 transition-colors duration-300">
                      {category}
                    </h3>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {skills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center gap-2 group"
                      >
                        <div className="w-16 h-16 rounded-lg flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-300">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="text-slate-400 text-base mb-4 group-hover:text-slate-300 transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Professional Skills Section */}
      <div className="bg-slate-950 w-full py-20 px-8">
        <div className="max-w-7xl mx-auto w-full">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              PROFESSIONAL SKILLS
            </h2>
          </div>

          {/* Professional Skills Pills */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-8 py-4 hover:bg-blue-950 hover:border-blue-500 hover:scale-105 hover:shadow-lg hover:shadow-slate-700/50 transition-all duration-300 cursor-pointer">
              <span className="text-white text-base font-medium">
                Leadership & Team Collaboration
              </span>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-8 py-4 hover:bg-blue-950 hover:border-blue-500 hover:scale-105 hover:shadow-lg hover:shadow-slate-700/50 transition-all duration-300 cursor-pointer">
              <span className="text-white text-base font-medium">
                Adaptability & Time Management
              </span>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-8 py-4 hover:bg-blue-950 hover:border-blue-500 hover:scale-105 hover:shadow-lg hover:shadow-slate-700/50 transition-all duration-300 cursor-pointer">
              <span className="text-white text-base font-medium">
                Communication & Presentation
              </span>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-8 py-4 hover:bg-blue-950 hover:border-blue-500 hover:scale-105 hover:shadow-lg hover:shadow-slate-700/50 transition-all duration-300 cursor-pointer">
              <span className="text-white text-base font-medium">
                Problem Solving
              </span>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-8 py-4 hover:bg-blue-950 hover:border-blue-500 hover:scale-105 hover:shadow-lg hover:shadow-slate-700/50 transition-all duration-300 cursor-pointer">
              <span className="text-white text-base font-medium">
                Event Management
              </span>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-8 py-4 hover:bg-blue-950 hover:border-blue-500 hover:scale-105 hover:shadow-lg hover:shadow-slate-700/50 transition-all duration-300 cursor-pointer">
              <span className="text-white text-base font-medium">
                Critical Thinking
              </span>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-8 py-4 hover:bg-blue-950 hover:border-blue-500 hover:scale-105 hover:shadow-lg hover:shadow-slate-700/50 transition-all duration-300 cursor-pointer">
              <span className="text-white text-base font-medium">
                Agile project management
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Credentials Section */}
      <div className="bg-slate-950 w-full py-20 px-8">
        <div className="max-w-7xl mx-auto w-full">
          {/* EDUCATION Badge */}
          <div className="flex justify-center mb-8">
            <div className="border border-blue-500/50 rounded-full px-6 py-2">
              <span className="text-blue-500 text-sm font-semibold tracking-wider">
                EDUCATION
              </span>
            </div>
          </div>

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              <span className="text-white">CREDENTIALS</span>
            </h2>
          </div>

          {/* Education Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* BSc Card */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:bg-slate-800/70 hover:border-blue-500/30 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer group">
              <div className="mb-4">
                <span className="text-blue-500 text-sm font-semibold">
                  2023-Present
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-500 transition-colors duration-300">
                BSc (Hons) in Computing and Information Systems
              </h3>
              <p className="text-slate-400 text-base mb-4 group-hover:text-slate-300 transition-colors duration-300">
                Sabaragamuwa University of Sri Lanka
              </p>
              <div className="h-1 w-16 bg-blue-500 rounded-full group-hover:w-24 transition-all duration-300"></div>
              <p className="text-slate-500 text-sm mt-4 group-hover:text-slate-400 transition-colors duration-300">
                Specialization in Software Engineering
              </p>
            </div>

            {/* Diploma In English Card */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:bg-slate-800/70 hover:border-blue-500/30 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer group">
              <div className="mb-4">
                <span className="text-slate-400 text-sm font-semibold">
                  2022
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-500 transition-colors duration-300">
                Diploma In English
              </h3>
              <p className="text-slate-400 text-base mb-4 group-hover:text-slate-300 transition-colors duration-300">
                Esoft Metro Campus
              </p>
              <div className="h-1 w-16 bg-blue-500 rounded-full group-hover:w-24 transition-all duration-300"></div>
              <p className="text-slate-500 text-sm mt-4 group-hover:text-slate-400 transition-colors duration-300">
                Specialization in Advanced English Language Skills
              </p>
            </div>

            {/* G.C.E Card */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:bg-slate-800/70 hover:border-blue-500/30 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer group">
              <div className="mb-4">
                <span className="text-slate-400 text-sm font-semibold">
                  2021
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-500 transition-colors duration-300">
                G.C.E Advanced Level
              </h3>
              <p className="text-slate-400 text-base mb-4 group-hover:text-slate-300 transition-colors duration-300">
                Rahula College Matara
              </p>
              <div className="h-1 w-16 bg-blue-500 rounded-full group-hover:w-24 transition-all duration-300"></div>
              <p className="text-slate-500 text-sm mt-4 group-hover:text-slate-400 transition-colors duration-300">
                Science Stream
              </p>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-all duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-blue-500 mb-2">
                Certifications
              </h3>
              <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Certification 1 */}
              <a href="https://open.uom.lk/lms/mod/customcert/view.php?id=839&downloadown=1" target="_blank" rel="noopener noreferrer" className="block">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 hover:bg-slate-700/70 hover:border-blue-500/30 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer group">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 group-hover:w-3 group-hover:h-3 transition-all duration-300"></div>
                    <div>
                      <p className="text-white text-sm font-medium group-hover:text-blue-500 transition-colors duration-300">
                        Front-End Web Development - UOM
                      </p>
                    </div>
                  </div>
                </div>
              </a>

              {/* Certification 2 */}
              <a href="https://open.uom.lk/lms/mod/customcert/view.php?id=697&downloadown=1" target="_blank" rel="noopener noreferrer" className="block">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 hover:bg-slate-700/70 hover:border-blue-500/30 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer group">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 group-hover:w-3 group-hover:h-3 transition-all duration-300"></div>
                    <div>
                      <p className="text-white text-sm font-medium group-hover:text-blue-500 transition-colors duration-300">
                        Web Design for Beginners - UOM
                      </p>
                    </div>
                  </div>
                </div>
              </a>

              {/* Certification 3 */}
              <a href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-97e38564-e401-42ee-8d5b-873ba74c89b8.pdf" target="_blank" rel="noopener noreferrer" className="block">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 hover:bg-slate-700/70 hover:border-blue-500/30 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer group">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 group-hover:w-3 group-hover:h-3 transition-all duration-300"></div>
                    <div>
                      <p className="text-white text-sm font-medium group-hover:text-blue-500 transition-colors duration-300">
                        User Experience Design - Learn UI UX App Design with Figma
                      </p>
                    </div>
                  </div>
                </div>
              </a>

              {/* Certification 4 */}
              <a href="https://open.uom.lk/lms/mod/customcert/view.php?id=675&downloadown=1" target="_blank" rel="noopener noreferrer" className="block">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 hover:bg-slate-700/70 hover:border-blue-500/30 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer group">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 group-hover:w-3 group-hover:h-3 transition-all duration-300"></div>
                    <div>
                      <p className="text-white text-sm font-medium group-hover:text-blue-500 transition-colors duration-300">
                        Python for Beginners - UOM
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Volunteering Section */}
      <div className="bg-slate-950 w-full py-20 px-8">
        <div className="max-w-7xl mx-auto w-full">
          {/* COMMUNITY Badge */}
          <div className="flex justify-center mb-8">
            <div className="border border-blue-500/50 rounded-full px-6 py-2">
              <span className="text-blue-500 text-sm font-semibold tracking-wider">
                COMMUNITY
              </span>
            </div>
          </div>

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">VOLUNTEERING</h2>
          </div>

          {/* Volunteering Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Chair Volunteer Card */}
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:bg-slate-800/70 hover:border-blue-500/30 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer group">
              {/* Heart Icon */}
              <div className="absolute top-6 right-6 w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                Project Chair of GeekZone v1.0
              </h3>
              <p className="text-blue-500 text-sm font-semibold mb-4">
                IEEE Student Branch of SUSL
              </p>
              <p className="text-slate-400 text-base leading-relaxed">
                Supported the International Conference on Advanced Research in Computing.
              </p>
            </div>

            {/* Active Member Volunteer Card */}
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:bg-slate-800/70 hover:border-blue-500/30 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer group">
              {/* Heart Icon */}
              <div className="absolute top-6 right-6 w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                Active Member
              </h3>
              <p className="text-blue-500 text-sm font-semibold mb-4">
                Society of Computer Sciences of SUSL
              </p>
              <p className="text-slate-400 text-base leading-relaxed">
                Empowering students through STEM education and mentorship programs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Me Section */}
      <div className='bg-slate-950 w-full py-20 px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='bg-linear-to-r from-blue-900/40 to-blue-800/20 backdrop-blur-sm rounded-3xl p-8 sm:p-12 lg:p-16 border border-blue-500/50 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20'>
            <div className='flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8'>
              {/* Left Side - Text */}
              <div className='flex-1 text-center lg:text-left'>
                <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2'>
                  Have a project in mind?
                </h2>
                <p className='text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-400'>
                  Let's build something together!
                </p>
              </div>

              {/* Right Side - Button */}
              <div className='shrink-0'>
                <a 
                  href='/contact'
                  className='inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 active:scale-95'
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
