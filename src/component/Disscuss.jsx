import { FaArrowRight } from "react-icons/fa";

const Disscuss = () => {
  const Scroll = () => {
      const section = document.getElementById("hero");
      section?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="my-12 rounded-sm text-white bg-indigo-400 p-4 md:p-20 text-center space-y-10">
      <h2 className="text-2xl md:text-5xl ">Lets Disscuss Innovative Ideas</h2>
      <p className="w-4/5 mx-auto">Innovation is the spark that ignites progress and transforms the impossible into reality. It begins with open minds and fearless conversations, where bold ideas are welcomed and explored without limits.</p>
      <button onClick={()=>{Scroll()}} className="bg-indigo-400 border-b-2 text-xl hover:scale-105 ">Get Started</button>
    </div>
  );
};

export default Disscuss;