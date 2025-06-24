import { Helmet } from "react-helmet";
import Different from "../component/Different";
import Disscuss from "../component/Disscuss";
import Hero from "../component/Hero";
import Testimonial from "../component/Testimonial";
import Works from "../component/Works";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Nazir </title>
        <meta name="description" content="Nazir Hossain's personal portfolio homepage." />
      </Helmet>
      <Hero />
      <Works />
      <Different />
      <Testimonial/>
      <Disscuss/>
    </div>
  );
};

export default Home;