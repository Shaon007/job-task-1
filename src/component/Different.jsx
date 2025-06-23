import { FaLightbulb, FaTag } from "react-icons/fa";
import { FaGrav } from "react-icons/fa6";
import Lottie from 'lottie-react';
import spacial from '../assets/special.json';

const Different = () => {
  return (
    <div id="different" className="px-4 md:px-10 lg:px-16 py-12 lg:py-20 bg-base-100">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-24">
        What Makes Me Special
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 border-b-2 border-l-4 rounded-lg">
            <div className="bg-indigo-400 text-white p-3 rounded-md text-2xl">
              <FaLightbulb className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-1">Full-Stack Development</h3>
              <p className="text-gray-600 text-sm md:text-base">
                I build both the frontend and backend using technologies like React, Node.js, and MongoDB — delivering end-to-end solutions.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 border-b-2 border-l-4 rounded-lg">
            <div className="bg-indigo-400 text-white p-3 rounded-md text-2xl">
              <FaTag className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-1">Focus on UI/UX</h3>
              <p className="text-gray-600 text-sm md:text-base">
                I design interfaces with the user in mind, ensuring responsive layouts, accessibility, and beautiful visuals.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 border-b-2 border-l-4 rounded-lg">
            <div className="bg-indigo-400 text-white p-3 rounded-md text-2xl">
              <FaGrav className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-1">Adaptive Learner</h3>
              <p className="text-gray-600 text-sm md:text-base">
                I constantly upskill by exploring new frameworks and building real-world projects to stay ahead of the curve.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center relative mt-10 lg:mt-0">
          <div className="absolute top-6 right-1 w-[260px] h-[260px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] bg-indigo-100 rounded-xl shadow-lg z-0"></div>
          <div className="relative top-10 md:top-12 lg:top-16 left-8 md:left-10 lg:left-16 z-10 bg-white rounded-xl shadow-2xl p-2 md:p-4">
            <Lottie
              animationData={spacial}
              loop
              autoplay
              className="h-[260px] w-[260px] md:h-[300px] md:w-[300px] lg:h-[350px] lg:w-[350px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Different;
