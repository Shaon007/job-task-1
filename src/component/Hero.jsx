import Lottie from 'lottie-react';
import animationData from '../assets/hero.json';
import { FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-10 py-10 lg:h-screen bg-gradient-to-b from-white to-purple-50"
    >
      {/* Text Section */}
      <div className="w-full lg:w-3/5 text-center lg:text-left space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Hi, I'm Nazir Hossain
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
          I'm a full-stack web developer passionate about building impactful digital experiences.
        </p>
        <div className='flex gap-4'>
          <a
            href="/nazir_cv.pdf"
            download
            className="btn bg-indigo-400 hover:scale-95 transition-transform duration-300 text-white w-fit underline mx-auto lg:mx-0"
          >
            Download CV
          </a>
          <a
            href="https://github.com/Shaon007"
            target="_blank"
            className="btn bg-indigo-400 hover:scale-95 transition-transform duration-300 text-white w-fit underline mx-auto lg:mx-0"
          >
            Github <FaGithub/>
          </a>
        </div>
      </div>
      <div className="w-full lg:w-4/5 mt-12 lg:mt-0 flex justify-center">
        <Lottie
          animationData={animationData}
          loop
          autoplay
          style={{ width: '100%', maxWidth: '700px', height: 'auto' }}
        />
      </div>
    </div>
  );
};

export default Hero;
