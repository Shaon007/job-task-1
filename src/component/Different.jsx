import { FaCode, FaPaintBrush, FaGraduationCap, FaLightbulb, FaTag,  } from "react-icons/fa";
import { FaGrav, FaTags } from "react-icons/fa6";
import Lottie from 'lottie-react';
import spacial from '../assets/special.json';

const Different = () => {

  return (
    <div id="different" className="py-20 px-6 md:px-16 bg-base-100">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-24">What Makes Me Special</h2>

      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-4 ">
          <div className="flex gap-6 items-center p-6 border-b-2 border-l-4 rounded-lg">
            <div className=" p-3 rounded-md text-2xl bg-indigo-400 text-white ">
              <FaLightbulb className="w-12 h-12"/>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Full-Stack Development</h3>
              <p className="text-gray-600">
                I build both the frontend and backend using technologies like React, Node.js, and MongoDB — delivering end-to-end solutions.
              </p>
            </div>
          </div>
          <div className="flex gap-6 p-6 border-b-2 border-l-4 rounded-lg items-center">
            <div className=" p-3 bg-indigo-400 text-white rounded-md text-2xl">
              <FaTag className="w-12 h-12" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Focus on UI/UX</h3>
              <p className="text-gray-600">
                I design interfaces with the user in mind, ensuring responsive layouts, accessibility, and beautiful visuals.
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-center p-6 border-b-2 border-l-4 rounded-lg">
            <div className="bg-indigo-400 text-white p-3 rounded-md text-2xl">
              <FaGrav className="w-12 h-12 " />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Adaptive Learner</h3>
              <p className="text-gray-600">
                I constantly upskill by exploring new frameworks and building real-world projects to stay ahead of the curve.
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center relative">
          <div className="absolute top-6 right-1 w-[350px] h-[350px] bg-indigo-100 rounded-xl shadow-lg z-0"></div>
          <div className="relative top-16 left-16 z-10 bg-white rounded-xl shadow-2xl p-4">
            <Lottie
              animationData={spacial}
              loop
              autoplay
              style={{ height: '350px', width: '350px' }}
            />
          </div>
          </div>
      </div>
    </div>
  );
};

export default Different;
