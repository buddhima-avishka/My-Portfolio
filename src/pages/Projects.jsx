import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'
import "../index.css";

import Loader from "../components/Loader";
import Space from '../models/Space';
import { projectsData } from '../assets/assets';

const Projects = () => {
  
  const [currentAnimation, setCurrentAnimation] = useState('idle');
  
  return (
    <div className='relative w-full min-h-screen'>
      {/* Main Section */}
      <div className='relative h-screen w-full flex flex-col lg:flex-row bg-slate-900'>
        {/* Left Side - Projects Title */}
        <div className='w-full lg:w-1/2 flex flex-col p-8 lg:p-16 z-10 justify-center relative'>
          {/* MY PROJECTS Badge */}
          <div className="flex mb-8">
            <div className="border border-green-500/50 rounded-full px-6 py-2">
              <span className="text-green-500 text-sm font-semibold tracking-wider">
                My Projects
              </span>
            </div>
          </div>
          <div className='mb-8'>
            <p className='text-slate-600 text-lg leading-relaxed'>
              Discover a collection of my software engineering projects, showcasing practical solutions, modern architectures, and clean, user-focused designs. From full-stack web applications to mobile development and interactive digital experiences, each project reflects my commitment to innovation, performance, and continuous improvement.
            </p>
          </div>

          {/* Animated Stats Cards - Vertical Stack */}
          <div className='flex flex-col gap-4 mt-8'>
            {/* Card 1 - Projects Completed */}
            <div className='w-full max-w-md bg-linear-to-br from-green-900/40 to-transparent backdrop-blur-sm rounded-3xl p-6 border border-green-500/50 hover:scale-105 transition-all cursor-pointer animate-slideInLeft' style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
              <div className='relative'>
                <div className='relative'>
                  <h3 className='text-5xl font-bold text-green-500 mb-1 opacity-0 animate-fadeInUp' style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>10+</h3>
                  <p className='text-slate-600 text-base font-medium overflow-hidden opacity-0 animate-fadeInUp'  style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>Projects Completed</p>
                  <div className='mt-3 h-1 bg-green-500/30 rounded-full overflow-hidden opacity-0 animate-fadeInUp' style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
                    <div className='h-full bg-green-500 w-4/5 rounded-full'></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Commitment */}
            <div className='w-full max-w-md bg-linear-to-br from-green-900/40 to-transparent backdrop-blur-sm rounded-3xl p-6 border border-green-500/50 hover:scale-105 transition-all cursor-pointer animate-slideInLeft' style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
              <div className='relative'>
                <div className='relative'>
                  <h3 className='text-5xl font-bold text-green-500 mb-1 opacity-0 animate-fadeInUp' style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>100%</h3>
                  <p className='text-slate-600 text-base font-medium overflow-hidden opacity-0 animate-fadeInUp'  style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>Commitment</p>
                  <div className='mt-3 h-1 bg-green-500/30 rounded-full overflow-hidden opacity-0 animate-fadeInUp' style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
                    <div className='h-full bg-green-500 w-5/5 rounded-full'></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Learner */}
            <div className='w-full max-w-md bg-linear-to-br from-green-900/40 to-transparent backdrop-blur-sm rounded-3xl p-6 border border-green-500/50 hover:scale-105 transition-all cursor-pointer animate-slideInLeft' style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
              <div className='relative'>
                <div className='relative'>
                  <h3 className='text-5xl font-bold text-green-500 mb-1 opacity-0 animate-fadeInUp' style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>24/7</h3>
                  <p className='text-slate-600 text-base font-medium overflow-hidden opacity-0 animate-fadeInUp'  style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>Learner</p>
                  <div className='mt-3 h-1 bg-green-500/30 rounded-full overflow-hidden opacity-0 animate-fadeInUp' style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
                    <div className='h-full bg-green-500 w-4/5 rounded-full'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - 3D Space Model */}
        <div className='absolute inset-0 z-0 pointer-events-none'>
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
              // position={[0, 0, 0]}
              position={[3, -1.5, -1]}
              scale={[0.07, 0.08, 0.08]}
              rotation={[0, -0.6, 0]}
              // scale={[2, 2, 2]}
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
              <div key={index} className="card">
                <div className="card-content">
                  <h2 className="card-title">{project.title}</h2>
                  <p className="card-body">
                    {project.description}
                  </p>
                  <div className="flex gap-3 mt-4">
                    <a href={project.link} className="button">
                      Code
                    </a>
                    <a href="#" className="button">
                      Case Study
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects