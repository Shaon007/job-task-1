import Lottie from 'lottie-react';
import animationData from '../assets/hero.json';
const Hero = () => {
  return(
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-8 py-8  h-screen bg-gradient-to-b from-white to-purple-50">
    <div className="md:w-3/5 text-center md:text-left space-y-10">
      <h1 className="text-4xl md:text-5xl font-bold">Hi, I'm Nazir Hossain</h1>
      <p className="text-lg text-gray-600">
        I'm a full-stack web developer passionate about building impactful digital experiences.
      </p>
      <a
        href="/nazirCV.pdf"
        download
        className="btn bg-indigo-400 hover:scale-95 transition-transform duration-300 text-white w-fit underline "
      >
        Download CV
      </a>
    </div>

    {/* Animation */}

    <div className="md:w-4/5 mt-10 md:mt-0 flex justify-center">
            <Lottie
              animationData={animationData}
              loop
              autoplay
              style={{ height: '700px', width: '700px' }}
            />
      </div>
  </div>
  );
};

export default Hero;