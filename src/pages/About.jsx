import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";

import Robo from "../models/Robo";
import Loader from "../components/Loader";
import { techStack } from "../assets/assets.jsx";
import {
  react,
  javascript,
  html,
  css,
  tailwindcss,
  nodejs,
  mongodb,
  typescript,
} from "../assets/icons";

const About = () => {
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  // Skills data with imported icons
  const skillsData = {
    frontend: [
      { name: "React", icon: react },
      { name: "JavaScript", icon: javascript },
      { name: "HTML5", icon: html },
      { name: "CSS3", icon: css },
      { name: "Tailwind CSS", icon: tailwindcss },
      { name: "TypeScript", icon: typescript },
    ],
    backend: [
      { name: "Node.js", icon: nodejs },
      { name: "Express", icon: nodejs },
      { name: "Laravel", icon: null },
      { name: "PHP", icon: null },
    ],
    database: [
      { name: "MongoDB", icon: mongodb },
      { name: "MySQL", icon: null },
      { name: "PostgreSQL", icon: null },
      { name: "Firebase", icon: null },
    ],
  };

  const [visible, setVisible] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const divRef = React.useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* Main Section */}
      <div className="relative h-screen w-full flex flex-col lg:flex-row">
        {/* Left Side - About Me Title and Content */}
        <div className="w-full lg:w-1/2 flex flex-col p-8 lg:p-16 z-10">
          {/* About Me Title - Top Left */}
          <div className="mb-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800">
              About Me
            </h1>
          </div>

          {/* Content - Below Title, Left Side */}
          <div className="flex-1 overflow-y-auto">
            <div className="bg-gray-300 p-6 rounded-lg">
              <p className="text-slate-800 text-lg leading-relaxed mb-4">
                Hi! I'm Buddhima Avishka, an undergraduate pursuing a BSc (Hons)
                in Computing and Information Systems at Sabaragamuwa University
                of Sri Lanka. I'm passionate about creating modern and
                meaningful digital solutions through clean, efficient, and
                user-focused design.
              </p>
              <p className="text-slate-800 text-lg leading-relaxed">
                I have experience working with the MERN stack, Laravel, and
                Flutter, allowing me to build full-stack web and mobile
                applications. I enjoy exploring new technologies, improving my
                skills, and taking on challenges that help me grow as a
                developer. I'm always excited to learn, innovate, and contribute
                to impactful projects.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - 3D Robo Model */}
        <div className="absolute inset-0 z-20 pointer-events-none">
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
              <Robo
                currentAnimation={currentAnimation}
                // position={[0, 0, 0]}
                position={[3, -10, -1]}
                scale={[4, 4, 4]}
                rotation={[0, -0.4, 0]}
                // scale={[2, 2, 2]}
              />
            </Suspense>
          </Canvas>
        </div>

        {/* About Qualities */}
        <div className="bg-slate-950 absolute bottom-0 z-30 w-full content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-10">
            <div className="flex flex-col items-center justify-center max-w-80">
              <div className="p-6 aspect-square bg-violet-100 rounded-full">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 18.667V24.5m4.668-8.167V24.5m4.664-12.833V24.5m2.333-21L15.578 13.587a.584.584 0 0 1-.826 0l-3.84-3.84a.583.583 0 0 0-.825 0L2.332 17.5M4.668 21v3.5m4.664-8.167V24.5"
                    stroke="#7F22FE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="mt-5 space-y-2 text-center">
                <h3 className="text-base font-semibold text-white">
                  Clean Code
                </h3>
                <p className="text-sm text-slate-600">
                  Writing maintainable, well-documented code that teams love to
                  work with
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center max-w-80">
              <div className="p-6 aspect-square bg-green-100 rounded-full">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 11.667A2.333 2.333 0 0 0 11.667 14c0 1.19-.117 2.929-.304 4.667m4.972-3.36c0 2.776 0 7.443-1.167 10.36m5.004-1.144c.14-.7.502-2.683.583-3.523M2.332 14a11.667 11.667 0 0 1 21-7m-21 11.667h.01m23.092 0c.233-2.333.152-6.246 0-7"
                    stroke="#00A63E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.832 22.75C6.415 21 6.999 17.5 6.999 14a7 7 0 0 1 .396-2.333m2.695 13.999c.245-.77.525-1.54.665-2.333m-.255-15.4A7 7 0 0 1 21 14v2.333"
                    stroke="#00A63E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="mt-5 space-y-2 text-center">
                <h3 className="text-base font-semibold text-white">
                  Fast Learner
                </h3>
                <p className="text-sm text-slate-600">
                  Quickly adapting to new technologies and frameworks as
                  projects demand
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center max-w-80">
              <div className="p-6 aspect-square bg-orange-100 rounded-full">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.668 25.666h16.333a2.333 2.333 0 0 0 2.334-2.333V8.166L17.5 2.333H7a2.333 2.333 0 0 0-2.333 2.333v4.667"
                    stroke="#F54900"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.332 2.333V7a2.334 2.334 0 0 0 2.333 2.333h4.667m-21 8.167h11.667M10.5 21l3.5-3.5-3.5-3.5"
                    stroke="#F54900"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="mt-5 space-y-2 text-center">
                <h3 className="text-base font-semibold text-white">
                  Team Player
                </h3>
                <p className="text-sm text-slate-600">
                  Collaborating effectively in cross-functional teams with clear
                  communication
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center max-w-80">
              <div className="p-6 aspect-square bg-violet-100 rounded-full">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 18.667V24.5m4.668-8.167V24.5m4.664-12.833V24.5m2.333-21L15.578 13.587a.584.584 0 0 1-.826 0l-3.84-3.84a.583.583 0 0 0-.825 0L2.332 17.5M4.668 21v3.5m4.664-8.167V24.5"
                    stroke="#7F22FE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="mt-5 space-y-2 text-center">
                <h3 className="text-base font-semibold text-white">
                  User-Focused
                </h3>
                <p className="text-sm text-slate-600">
                  Prioritizing accessibility and user experience in every
                  project
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-slate-950 flex flex-col w-full min-h-screen p-8 lg:p-16">
        <div className="max-w-7xl mx-auto w-full">
          {/* SKILLS & EXPERTISE Badge */}
          <div className="flex justify-center mb-8">
            <div className="border border-orange-500/50 rounded-full px-6 py-2">
              <span className="text-orange-500 text-sm font-semibold tracking-wider">
                SKILLS & EXPERTISE
              </span>
            </div>
          </div>
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-slate-600">
              Full-stack development expertise across modern technologies
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(techStack).map(([category, skills], idx) => {
              return (
                <div
                  key={category}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:bg-slate-800/70 hover:border-orange-500/30 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 cursor-pointer group"
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
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
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
      <div className="bg-slate-900 w-full py-20 px-8">
        <div className="max-w-7xl mx-auto w-full">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              PROFESSIONAL SKILLS
            </h2>
          </div>

          {/* Professional Skills Pills */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-8 py-4 hover:bg-slate-700/70 hover:border-slate-600 hover:scale-105 hover:shadow-lg hover:shadow-slate-700/50 transition-all duration-300 cursor-pointer">
              <span className="text-white text-base font-medium">
                Leadership & Team Collaboration
              </span>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-8 py-4 hover:bg-slate-700/70 hover:border-slate-600 hover:scale-105 hover:shadow-lg hover:shadow-slate-700/50 transition-all duration-300 cursor-pointer">
              <span className="text-white text-base font-medium">
                Clear communication & presentations
              </span>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-8 py-4 hover:bg-slate-700/70 hover:border-slate-600 hover:scale-105 hover:shadow-lg hover:shadow-slate-700/50 transition-all duration-300 cursor-pointer">
              <span className="text-white text-base font-medium">
                Problem Solving
              </span>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-8 py-4 hover:bg-slate-700/70 hover:border-slate-600 hover:scale-105 hover:shadow-lg hover:shadow-slate-700/50 transition-all duration-300 cursor-pointer">
              <span className="text-white text-base font-medium">
                Critical Thinking
              </span>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-8 py-4 hover:bg-slate-700/70 hover:border-slate-600 hover:scale-105 hover:shadow-lg hover:shadow-slate-700/50 transition-all duration-300 cursor-pointer">
              <span className="text-white text-base font-medium">
                Managing stakeholders
              </span>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-8 py-4 hover:bg-slate-700/70 hover:border-slate-600 hover:scale-105 hover:shadow-lg hover:shadow-slate-700/50 transition-all duration-300 cursor-pointer">
              <span className="text-white text-base font-medium">
                Adaptability & Time Management
              </span>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-8 py-4 hover:bg-slate-700/70 hover:border-slate-600 hover:scale-105 hover:shadow-lg hover:shadow-slate-700/50 transition-all duration-300 cursor-pointer">
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
            <div className="border border-orange-500/50 rounded-full px-6 py-2">
              <span className="text-orange-500 text-sm font-semibold tracking-wider">
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
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:bg-slate-800/70 hover:border-orange-500/30 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 cursor-pointer group">
              <div className="mb-4">
                <span className="text-orange-500 text-sm font-semibold">
                  2023-Present
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                BSc (Hons) in Computing and Information Systems
              </h3>
              <p className="text-slate-400 text-base mb-4 group-hover:text-slate-300 transition-colors duration-300">
                Sabaragamuwa University of Sri Lanka
              </p>
              <div className="h-1 w-16 bg-orange-500 rounded-full group-hover:w-24 transition-all duration-300"></div>
              <p className="text-slate-500 text-sm mt-4 group-hover:text-slate-400 transition-colors duration-300">
                Specialization in Software Engineering
              </p>
            </div>

            {/* G.C.E Card */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:bg-slate-800/70 hover:border-orange-500/30 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 cursor-pointer group">
              <div className="mb-4">
                <span className="text-slate-400 text-sm font-semibold">
                  2021
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                G.C.E Advanced Level
              </h3>
              <p className="text-slate-400 text-base mb-4 group-hover:text-slate-300 transition-colors duration-300">
                Rahula College Matara
              </p>
              <div className="h-1 w-16 bg-orange-500 rounded-full group-hover:w-24 transition-all duration-300"></div>
              <p className="text-slate-500 text-sm mt-4 group-hover:text-slate-400 transition-colors duration-300">
                Science Stream
              </p>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-all duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-orange-500 mb-2">
                Certifications
              </h3>
              <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Certification 1 */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 hover:bg-slate-700/70 hover:border-orange-500/30 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 cursor-pointer group">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 group-hover:w-3 group-hover:h-3 transition-all duration-300"></div>
                  <div>
                    <p className="text-white text-sm font-medium group-hover:text-orange-400 transition-colors duration-300">
                      Front-End Web Development - UOM
                    </p>
                  </div>
                </div>
              </div>

              {/* Certification 2 */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 hover:bg-slate-700/70 hover:border-orange-500/30 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 cursor-pointer group">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 group-hover:w-3 group-hover:h-3 transition-all duration-300"></div>
                  <div>
                    <p className="text-white text-sm font-medium group-hover:text-orange-400 transition-colors duration-300">
                      Web Design for Beginners - UOM
                    </p>
                  </div>
                </div>
              </div>

              {/* Certification 3 */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 hover:bg-slate-700/70 hover:border-orange-500/30 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 cursor-pointer group">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 group-hover:w-3 group-hover:h-3 transition-all duration-300"></div>
                  <div>
                    <p className="text-white text-sm font-medium group-hover:text-orange-400 transition-colors duration-300">
                      User Experience Design - Learn UI UX App Design with Figma
                    </p>
                  </div>
                </div>
              </div>

              {/* Certification 4 */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 hover:bg-slate-700/70 hover:border-orange-500/30 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 cursor-pointer group">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 group-hover:w-3 group-hover:h-3 transition-all duration-300"></div>
                  <div>
                    <p className="text-white text-sm font-medium group-hover:text-orange-400 transition-colors duration-300">
                      Python for Beginners - UOM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
