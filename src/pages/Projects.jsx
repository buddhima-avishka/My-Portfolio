import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'
import "../index.css";

import Loader from "../components/Loader";
import Space from '../models/Space';

const Projects = () => {
  
  const [currentAnimation, setCurrentAnimation] = useState('idle');

  const projectsData = [
    {
      title: "Project One",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa."
    },
    {
      title: "Project Two",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa."
    },
    {
      title: "Project Three",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa."
    },
    {
      title: "Project Four",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa."
    },
    {
      title: "Project Five",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa."
    },
    {
      title: "Project Six",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa."
    }
  ];
  
  return (
    <div className='relative w-full min-h-screen'>
      {/* Main Section */}
      <div className='relative h-screen w-full flex flex-col lg:flex-row bg-white'>
        {/* Left Side - Projects Title */}
        <div className='w-full lg:w-1/2 flex flex-col p-8 lg:p-16 z-10 justify-center relative'>
          <div className='mb-8'>
            <h1 className='text-4xl lg:text-6xl font-bold text-slate-800'>My Projects</h1>
          </div>
          <div className='mb-8'>
            <p className='text-slate-600 text-lg leading-relaxed'>
              Explore my latest work and creative solutions in web development, mobile applications, and innovative digital experiences.
            </p>
          </div>

          {/* Animated Stats Cards - Vertical Stack */}
          <div className='flex flex-col gap-4 mt-8'>
            {/* Card 1 - Projects Completed */}
            <div className='w-full max-w-md bg-linear-to-br from-orange-900/40 to-transparent backdrop-blur-sm rounded-3xl p-6 border border-orange-500/50 hover:scale-105 transition-all cursor-pointer animate-slideInLeft' style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
              <div className='relative'>
                <div className='relative'>
                  <h3 className='text-5xl font-bold text-orange-400 mb-1 opacity-0 animate-fadeInUp' style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>10+</h3>
                  <p className='text-black-300 text-base font-medium'>Projects Completed</p>
                  <div className='mt-3 h-1 bg-orange-500/30 rounded-full overflow-hidden opacity-0 animate-fadeInUp' style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
                    <div className='h-full bg-orange-500 w-4/5 rounded-full'></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Commitment */}
            <div className='w-full max-w-md bg-linear-to-br from-orange-900/40 to-transparent backdrop-blur-sm rounded-3xl p-6 border border-orange-500/50 hover:scale-105 transition-all cursor-pointer animate-slideInLeft' style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
              <div className='relative'>
                <div className='relative'>
                  <h3 className='text-5xl font-bold text-orange-400 mb-1 opacity-0 animate-fadeInUp' style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>100%</h3>
                  <p className='text-black-300 text-base font-medium'>Commitment</p>
                  <div className='mt-3 h-1 bg-orange-500/30 rounded-full overflow-hidden opacity-0 animate-fadeInUp' style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
                    <div className='h-full bg-orange-500 w-4/5 rounded-full'></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Learner */}
            <div className='w-full max-w-md bg-linear-to-br from-orange-900/40 to-transparent backdrop-blur-sm rounded-3xl p-6 border border-orange-500/50 hover:scale-105 transition-all cursor-pointer animate-slideInLeft' style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
              <div className='relative'>
                <div className='relative'>
                  <h3 className='text-5xl font-bold text-orange-400 mb-1 opacity-0 animate-fadeInUp' style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>24/7</h3>
                  <p className='text-black-300 text-base font-medium'>Learner</p>
                  <div className='mt-3 h-1 bg-orange-500/30 rounded-full overflow-hidden opacity-0 animate-fadeInUp' style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
                    <div className='h-full bg-orange-500 w-4/5 rounded-full'></div>
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
      <div className='bg-slate-50 w-full py-20 px-8'>
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <div key={index} className="card">
                <div className="card-content">
                  <h2 className="card-title">{project.title}</h2>
                  <p className="card-body">
                    {project.description}
                  </p>
                  <a href="#" className="button">
                    Learn More
                  </a>
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