import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'

import Robo from '../models/Robo'
import Loader from '../components/Loader'

const About = () => {

  const [currentAnimation, setCurrentAnimation] = useState('idle');

  return (
    <div className='relative w-full min-h-screen'>
      {/* Main Section */}
      <div className='relative h-screen w-full flex flex-col lg:flex-row'>
        {/* Left Side - About Me Title and Content */}
        <div className='w-full lg:w-1/2 flex flex-col p-8 lg:p-16 z-10'>
          {/* About Me Title - Top Left */}
          <div className='mb-8'>
            <h1 className='text-4xl lg:text-6xl font-bold text-slate-800'>About Me</h1>
          </div>

          {/* Content - Below Title, Left Side */}
          <div className='flex-1 overflow-y-auto'>
            <div className='bg-gray-300 p-6 rounded-lg'>
              <p className='text-slate-800 text-lg leading-relaxed mb-4'>
                Hi! I'm Buddhima Avishka, an undergraduate pursuing a BSc (Hons) in Computing and Information Systems at Sabaragamuwa University of Sri Lanka. I'm passionate about creating modern and meaningful digital solutions through clean, efficient, and user-focused design.
              </p>
              <p className='text-slate-800 text-lg leading-relaxed'>
                I have experience working with the MERN stack, Laravel, and Flutter, allowing me to build full-stack web and mobile applications. I enjoy exploring new technologies, improving my skills, and taking on challenges that help me grow as a developer.
                I'm always excited to learn, innovate, and contribute to impactful projects.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - 3D Robo Model */}
        <div className='w-full lg:w-1/2 h-96 lg:h-full relative z-20'>
          <Canvas
            camera={{ 
              position: [0,0,5],
              fov: 75,
              near: 0.1,
              far: 1000
             }}
          >
            <directionalLight intensity={2.5} position={[0,0,1]}/>
            <ambientLight intensity={1}/>
            <Suspense fallback={<Loader/>}>
              <Robo
                currentAnimation={currentAnimation}
                position={[0, -2, 0]}
                scale={[2.5, 2.5, 2.5]}
                rotation={[0, 0, 0]}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
      
      {/* Skills Section */}
      <div className='bg-red-200 flex flex-col w-full min-h-screen p-8'>
        <h2 className='text-4xl font-bold'>Skills</h2>
      </div>
    </div>
  )
}

export default About
