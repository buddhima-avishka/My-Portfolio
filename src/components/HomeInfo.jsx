import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText}) => (
  <div className='info-box'>
    <p className='font-medium sm:text-xl text-center' style={{ fontFamily: 'SpButchLiteLight, sans-serif' }}>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn' style={{ fontFamily: 'SpButchLiteLight, sans-serif' }}>
      {btnText}
      <img src={arrow} className='w-4 h-4 object-contain animate-slide-left-right' />
    </Link>
  </div>
)

const InfoBox1 = ({ text, link, btnText}) => (
  <div className='info-box'>
    <p className='font-medium sm:text-xl text-center' style={{ fontFamily: 'SpButchLiteLight, sans-serif' }}>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn flex items-center gap-3' style={{ fontFamily: 'SpButchLiteLight, sans-serif' }}>
      {btnText}
      <div className="w-10 h-6 border-2 border-gray-600 rounded-full flex justify-center items-center pl-2 animate-slide-left-right">
        <div className="w-2 h-1 bg-orange-400 rounded-full"></div>
      </div>
    </Link>
  </div>
)

const renderContent = {
  1: (
    <InfoBox1
      text={
        <>
          Hi, I am Buddhima Avishka
          <br />
          A Full-stack Software Engineer from Sri Lanka
        </>
      }
      btnText="Scroll Right"
    />
  ),
  2: (
    <InfoBox
      text="Delivered high-quality applications with clean code and solid architecture. Interested to explore?"
      link="/projects"
      btnText="Explore My Work"
    />
    
  ),
  3: (
    <InfoBox
      text="Passionate software engineer creating impactful digital experiences."
      link="/about"
      btnText="Explore More"
    />
  ),
  4: (
    <InfoBox
      text="Got an idea to build? I’m ready to turn it into reality."
      link="/contact"
      btnText="Connect with me"
    />
  )
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo