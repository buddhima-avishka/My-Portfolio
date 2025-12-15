import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'
import "../index.css";

import Loader from "../components/Loader";
import Space from '../models/Space';
import { projectsData } from '../assets/assets';

const Projects = () => {
  
  const [currentAnimation, setCurrentAnimation] = useState('idle');
  
  return (
    <div className='relative w-full min-h-screen overflow-x-hidden'>
      {/* Main Section */}
      <div className='relative min-h-screen pt-20 lg:h-screen w-full flex flex-col lg:flex-row bg-slate-900'>
        {/* Left Side - Projects Title */}
        <div className='w-full lg:w-1/2 flex flex-col p-4 sm:p-8 lg:p-16 z-10 justify-center relative  lg:py-0'>
          {/* MY PROJECTS Badge */}
          <div className="flex mb-6 lg:mb-8">
            <div className="border border-blue-500/50 rounded-full px-4 sm:px-6 py-2">
              <span className="text-blue-500 text-xs sm:text-sm font-semibold tracking-wider">
                My Projects
              </span>
            </div>
          </div>
          <div className='mb-6 lg:mb-8'>
            <p className='text-slate-400 text-base sm:text-lg leading-relaxed'>
              Discover a collection of my software engineering projects, showcasing practical solutions, modern architectures, and clean, user-focused designs. From full-stack web applications to mobile development and interactive digital experiences, each project reflects my commitment to innovation, performance, and continuous improvement.
            </p>
          </div>

          {/* Animated Stats Cards - Vertical Stack */}
          <div className='flex flex-col gap-3 sm:gap-4 mt-4 sm:mt-8'>
            {/* Card 1 - Projects Completed */}
            <div className='w-full max-w-md bg-linear-to-br from-blue-900/40 to-transparent backdrop-blur-sm rounded-3xl p-4 sm:p-6 border border-blue-500/50 hover:scale-105 transition-all cursor-pointer animate-slideInLeft' style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
              <div className='relative'>
                <div className='relative'>
                  <h3 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-500 mb-1 opacity-0 animate-fadeInUp' style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>10+</h3>
                  <p className='text-slate-400 text-sm sm:text-base font-medium overflow-hidden opacity-0 animate-fadeInUp'  style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>Projects Completed</p>
                  <div className='mt-3 h-1 bg-blue-500/30 rounded-full overflow-hidden opacity-0 animate-fadeInUp' style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
                    <div className='h-full bg-blue-500 w-4/5 rounded-full'></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Commitment */}
            <div className='w-full max-w-md bg-linear-to-br from-blue-900/40 to-transparent backdrop-blur-sm rounded-3xl p-4 sm:p-6 border border-blue-500/50 hover:scale-105 transition-all cursor-pointer animate-slideInLeft' style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
              <div className='relative'>
                <div className='relative'>
                  <h3 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-500 mb-1 opacity-0 animate-fadeInUp' style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>100%</h3>
                  <p className='text-slate-400 text-sm sm:text-base font-medium overflow-hidden opacity-0 animate-fadeInUp'  style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>Commitment</p>
                  <div className='mt-3 h-1 bg-blue-500/30 rounded-full overflow-hidden opacity-0 animate-fadeInUp' style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
                    <div className='h-full bg-blue-500 w-5/5 rounded-full'></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Learner */}
            <div className='w-full max-w-md bg-linear-to-br from-blue-900/40 to-transparent backdrop-blur-sm rounded-3xl p-4 sm:p-6 border border-blue-500/50 hover:scale-105 transition-all cursor-pointer animate-slideInLeft' style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
              <div className='relative'>
                <div className='relative'>
                  <h3 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-500 mb-1 opacity-0 animate-fadeInUp' style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>24/7</h3>
                  <p className='text-slate-400 text-sm sm:text-base font-medium overflow-hidden opacity-0 animate-fadeInUp'  style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>Learner</p>
                  <div className='mt-3 h-1 bg-blue-500/30 rounded-full overflow-hidden opacity-0 animate-fadeInUp' style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
                    <div className='h-full bg-blue-500 w-4/5 rounded-full'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Space Model - Desktop: right side, Mobile: centered background */}
        <div className='absolute inset-0 lg:left-1/2 z-0 pointer-events-none'>
          <Canvas
          camera={{ 
            position: [0,0,5],
            fov: 75,
            near: 0.1,
            far: 1000
           }}
        >
          <directionalLight intensity={3.5} position={[0,0,1]}/>
          <ambientLight intensity={2}/>
          <Suspense fallback={<Loader/>}>
            <Space
              currentAnimation={currentAnimation}
              position={window.innerWidth < 1024 ? [0, -2, -3] : [0, -1.5, -1]}
              scale={window.innerWidth < 1024 ? [0.06, 0.07, 0.07] : [0.07, 0.08, 0.08]}
              rotation={[0, 0, 0]}
            />
          </Suspense>
        </Canvas>
        </div>
      </div>
      

      {/* Projects Grid Section */}
      <div className='bg-slate-950 w-full py-20 px-8'>
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">SELECTED WORK</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <div key={index} className="group bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                {/* Image Section */}
                <div className="relative w-full h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-500 transition-colors duration-300">
                    {project.title}
                  </h2>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-slate-800/50 text-slate-300 rounded-full border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Link Button */}
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800  text-slate-300 hover:text-white text-sm font-medium rounded-full border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
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
  )
}

export default Projects