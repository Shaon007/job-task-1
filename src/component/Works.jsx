import { motion } from "framer-motion";
import Lottie from "lottie-react";
import uiux from "../assets/uiux.json";
import development from "../assets/developement.json";
import animation from "../assets/animation.json";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const works = [
  {
    title: "UI/UX Design",
    animation: uiux,
  },
  {
    title: "Web Developement",
    animation: development,
  },
  {
    title: "Animation",
    animation: animation,
  },
];

const Works = () => {
  return (
    <div className="py-20 px-6 md:px-16 bg-base-100">
      <h2 className="text-5xl font-bold text-center mb-12">What I Do</h2>

      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
        {works.map((work, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="relative overflow-hidden rounded-lg shadow-lg bg-white"
          >
            <Lottie
              animationData={work.animation}
              loop
              autoplay
              className="w-full h-64 object-cover pointer-events-none"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-2xl font-semibold">{work.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-around my-20 text-center">
        <div>
          <h2 className="text-6xl font-semibold">30+</h2>
          <p className="text-2xl">Project Done</p>
        </div>
        <div>
          <h2 className="text-6xl font-semibold">200 Hrs+</h2>
          <p className="text-2xl">Course Work</p>
        </div>
        <div>
          <h2 className="text-6xl font-semibold">20+</h2>
          <p className="text-2xl">Tools Mastered</p>
        </div>
      </div>
    </div>
  );
};

export default Works;
