import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';

import ObjectModel from '../models/Object'
import Loader from '../components/Loader';

const Contact = () => {

  const formRef = useRef(null);
  const [form, setForm] = useState({name: '', email: '', message: ''})
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle')

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');

    // console.log(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID)

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Buddhima',
        from_email: form.email,
        to_email: 'buddhimaliyanageba@gmail.com',
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      setCurrentAnimation('idle');
      // TODO: Show success message
      // TODO: Hide an alert

      setForm({name: '', email: '', message: ''});
    }).catch((error) => {
      setIsLoading(false);
      setCurrentAnimation('idle');
      console.error(error);
      // TODO: Show error message
    });
  };
  
  const handleFocus = () => setCurrentAnimation('walk');

  const handleBlur = () => setCurrentAnimation('idle');

  return (
    <div className='bg-slate-900 min-h-screen pt-20  pb-10 relative flex justify-center lg:flex-row flex-col max-container overflow-x-hidden'>
      {/* Form - Left Side on Desktop */}
      <form className="flex flex-col items-center text-sm text-slate-800 w-full lg:w-1/2 z-10 pt-10 px-4 lg:px-12 lg:mx-8" onSubmit={handleSubmit}>
            {/* CONTACT ME Badge */}
          <div className="flex mb-6 lg:mb-8">
            <div className="border border-blue-500/50 rounded-full px-4 sm:px-6 py-2">
              <span className="text-blue-500 text-xs sm:text-sm font-semibold tracking-wider">
                Contact Me
              </span>
            </div>
          </div>
            <h1 className="text-3xl md:text-4xl font-bold py-4 text-center text-white">Let's Get In Touch.</h1>
            
            
            <div className="w-full max-w-md lg:max-w-2xl px-4">
                <label htmlFor="name" className="font-medium text-slate-400">Full Name</label>
                <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-500 rounded-full focus-within:ring-2 focus-within:ring-blue-400 transition-all overflow-hidden">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.311 16.406a9.64 9.64 0 0 0-4.748-4.158 5.938 5.938 0 1 0-7.125 0 9.64 9.64 0 0 0-4.749 4.158.937.937 0 1 0 1.623.938c1.416-2.447 3.916-3.906 6.688-3.906 2.773 0 5.273 1.46 6.689 3.906a.938.938 0 0 0 1.622-.938M5.938 7.5a4.063 4.063 0 1 1 8.125 0 4.063 4.063 0 0 1-8.125 0" fill="#475569"/>
                    </svg>
                    <input type="text" name='name' className="h-full px-2 w-full outline-none bg-transparent text-slate-400" placeholder="Enter your full name" required value={form.name} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
                </div>
        
                <label htmlFor="email-address" className="font-medium mt-4 text-slate-400">Email Address</label>
                <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-500 rounded-full focus-within:ring-2 focus-within:ring-blue-400 transition-all overflow-hidden">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 3.438h-15a.937.937 0 0 0-.937.937V15a1.563 1.563 0 0 0 1.562 1.563h13.75A1.563 1.563 0 0 0 18.438 15V4.375a.94.94 0 0 0-.938-.937m-2.41 1.874L10 9.979 4.91 5.313zM3.438 14.688v-8.18l5.928 5.434a.937.937 0 0 0 1.268 0l5.929-5.435v8.182z" fill="#475569"/>
                    </svg>
                    <input type="email" name='email' className="h-full px-2 w-full outline-none bg-transparent text-slate-400" placeholder="Enter your email address" required value={form.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}  />
                </div>
        
                <label htmlFor="message" className="font-medium mt-4 text-slate-400">Message</label>
                <textarea rows="4" name='message' className="w-full mt-2 p-2 bg-transparent border border-slate-500 rounded-lg resize-none outline-none focus:ring-2 focus-within:ring-blue-400 transition-all text-slate-400" placeholder="Enter your message" required value={form.message} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} ></textarea>
                
                <button type="submit" className="flex items-center justify-center gap-1 mt-5 bg-blue-500 hover:bg-blue-600 text-white py-2.5 w-full rounded-full transition" disabled={isLoading} onFocus={handleFocus} onBlur={handleBlur}>
                    {isLoading ? 'Sending...' : 'Send Message'}
                    <svg className="mt-0.5" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33" fill="#fff"/>
                    </svg>
                </button>
            </div>
      </form>

      {/* 3D Object - Right Side on Desktop */}
      <div className='lg:w-1/2 w-full xs:h-[300px] sm:h-[300px] md:h-[400px] lg:h-[700px] mt-8 lg:mt-0 z-10'>

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
            <ObjectModel
              currentAnimation={currentAnimation}
              position={[0.5, 0, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.8, 0.8, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}

export default Contact