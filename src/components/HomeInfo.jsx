import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText}) => (
  <div className='info-box'>
    <p className='font-medium sm:text-xl text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src={arrow} className='w-4 h-4 object-contain' />
    </Link>
  </div>
)

const renderContent = {
  1: (
    <h1 className='sm:text-xl sm-leading-snug text-center py-4 px-8 bg-blue-500 text-white mx-5'>
      Hi, I am <span className='font-semibold'>Buddhima Avishka</span>
      <br />
      A Full-stack Software Engineer from <br /> Sri Lanka
    </h1>
  ),
  2: (
    <InfoBox
      text="Delivered high-quality applications with clean code and solid architecture. Interested to explore?"
      link="/projects"
      btnText="Discover my creations"
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