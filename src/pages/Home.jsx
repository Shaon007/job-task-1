import Different from "../component/Different";
import Disscuss from "../component/Disscuss";
import Hero from "../component/Hero";
import Testimonial from "../component/Testimonial";
import Works from "../component/Works";

const Home = () => {
  return (
    <div>
      <Hero />
      <Works />
      <Different />
      <Testimonial/>
      <Disscuss/>
    </div>
  );
};

export default Home;