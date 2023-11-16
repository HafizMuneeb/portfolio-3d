import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from "../assets/icons"
const InfoBox = ({ text, link, btnText }) => (
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
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Hafiz Muneeb</span>👋
            <br />
            A Web Developer from Pakistan
        </h1>
    ),
    2: (
       <InfoBox 
        text="Changing my field from biotechnology to web development and past 1 year learning alot of languages"
        link="/about"
        btnText="Learn More"
       />
    ),
    3: (
        <InfoBox 
            text="Working on multiple Projects. Curious about the impact"
            link="/projects"
            btnText="Visit my Portfolio"
       />
    ),
    4: (
        <InfoBox 
            text="Need a project done or looking for a dev? I'm just few keystrokes away"
            link="/contact"
            btnText="Let's talk"
       />
    ),
}



const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo