import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiFirebase, SiJavascript, SiKaggle, SiMongodb, SiNetlify, SiNextdotjs, SiPandas, SiPython, SiPytorch, SiTensorflow, SiVercel } from "react-icons/si";

const skills = {
  frontend: [
    { name: "React", icon: <FaReact/> , link: "https://reactjs.org" },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill/>, link: "https://tailwindcss.com" },
    { name: "JavaScript", icon: <SiJavascript/>, link: "https://www.javascript.com/" },
    { name: "HTML5", icon: <FaHtml5/>, link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
    { name: "CSS3", icon: <FaCss3Alt/>, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs/>, link: "https://nodejs.org" },
    { name: "Express.js", icon: <SiExpress/>, link: "https://expressjs.com/" },
    { name: "MongoDB", icon: <SiMongodb/>, link: "https://www.mongodb.com" },
    { name: "NextJs", icon: <SiNextdotjs />, link: "https://nextjs.org/" },
  ],
  cloud: [
    { name: "Firebase", icon: <SiFirebase/>, link: "https://firebase.google.com" },
    { name: "Vercel", icon: <SiVercel/>, link: "https://vercel.com" },
    { name: "Netlify", icon: <SiNetlify/>, link: "https://netlify.com" },
  ],
  datascience: [
    { name: "TensorFlow", icon: <SiTensorflow />, link: "https://www.tensorflow.org/" },
    { name: "Pytorch", icon: <SiPytorch />, link: "https://pytorch.org/" },
    { name: "Kaggle", icon: <SiKaggle />, link: "https://www.kaggle.com/" },
    { name: "Python", icon: <SiPython />, link: "https://www.python.org/" },
    { name: "Pandas", icon: <SiPandas />, link: "https://pandas.pydata.org/" },
  ]
};

const Skills = () => {
  return (
    <div className="px-4 md:px-16 py-12 space-y-16">
      <h1 className="text-4xl font-bold text-center mb-10">My Skills</h1>
      {[
        { title: "Frontend Development", data: skills.frontend, bg: "bg-purple-50" },
        { title: "Backend & Database", data: skills.backend, bg: "bg-indigo-50" },
        { title: "Cloud & Authentication", data: skills.cloud, bg: "bg-blue-50" },
        { title: "Data Science & AI", data: skills.datascience, bg: "bg-sky-50" },
      ].map((section, idx) => (
        <div key={idx} className={`${section.bg} p-8 rounded-xl shadow-md w-full`}>
          <h2 className="text-2xl font-semibold mb-6">{section.title}</h2>
          <div className="flex flex-wrap gap-6">
            {section.data.map(tool => (
              <a
                key={tool.name}
                href={tool.link}
                target="_blank"
                rel="noreferrer"
                className="relative group shadow hover:scale-110 transition-transform duration-300"
              >
                <div className="text-5xl">{tool.icon}</div>
                <span className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 px-2 py-1 text-sm bg-black text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {tool.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
