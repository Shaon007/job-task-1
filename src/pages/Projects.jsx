import { Helmet } from "react-helmet";

const projectData = [
  {
    name: "Equi-Sports",
    description: "A sports ecommerce website with backend and crud operation",
    live: "https://equi-sports-e0b09.web.app/",
    tech: ["React", "Tailwind", "nodejs","MongoDB"],
  },
  {
    name: "Dine-flow",
    description: "A resturant food feature website with backend and crud operation",
    live: "https://dine-flow-2abf7.web.app/",
    tech: ["React", "MongoDB", "Tailwind","nodejs"],
  },
  {
    name: "NavigateU",
    description: "A career guidline website",
    live: "https://navigateu-5e89c.firebaseapp.com/",
    tech: ["Node.js", "Express", "React","Framer Motion"],
  },
  {
    name: "Medi-Quest",
    description: "A medical supplies ecommerce website with fully functional admin,seller and buyer dashboard.",
    live: "https://medi-quest-c6cb9.web.app/",
    tech: ["React.js", "Firebase", "Tailwind","Nodejs","MongoDB"],
  },
  {
    name: "thinkBolt",
    description: "A blog website with crud operation",
    live: "https://think-bolt20.vercel.app/",
    tech: ["Next.js", "Firebase", "Tailwind", "Nodejs", "MongoDB"],
  },
  {
    name: "bookStore",
    description: "A bookstore site with crud and buy options with payment",
    live: "https://github.com/Shaon007/Django-BookStore",
    tech: ["Django", "Firebase", "Stripe"],
  },

];


const Projects = () => {
  return (

    <div className="py-20 px-6 md:px-16 bg-base-100">
      <Helmet>
        <title>Projects | Nazir</title>
        <meta name="description" content="Nazir Hossain's personal portfolio homepage." />
      </Helmet>
      <h2 className="text-5xl font-bold text-center mb-16">My Projects</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projectData.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 border hover:scale-105 transition-transform duration-500 ">
            <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
            <p className="text-sm text-gray-600 mb-3">
               {project.description}
            </p>
            <p className="text-sm text-gray-600 mb-3">
              <span className="font-semibold">Tech Stack:</span> {project.tech.join(", ")}
            </p>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto text-indigo-600 font-medium hover:underline"
            >
              Visit Live
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
