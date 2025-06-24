import Lottie from 'lottie-react';
import education from '../assets/education.json';
import { Helmet } from 'react-helmet';
const About = () => {

  const certificates = [
    {
      img: "https://web.programming-hero.com/assets/ph_logo-C24KMH6S.svg",
      title: "Full-Stack Web Development",
      platform: "Programming Hero",
      link: "https://web.programming-hero.com/"
    },
    {
      img: "https://th.bing.com/th/id/OIP.T6dpcZS78wwlqtV13gEvDwHaHa?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
      title: "Basic Python",
      platform: "HackerRank",
      link: "https://www.hackerrank.com/certificates/d44f705cc0e1"
    },
    {
      img: "https://edge.gov.bd/wp-content/themes/edgewebsite/images/logo.png",
      title: "Python Django",
      platform: "EDGE",
      link: "https://edge.gov.bd/"
    },
    {
      img: "https://th.bing.com/th/id/R.7a8cf8a1168070d31686e2833ff7d9af?rik=27kjyFa2zGbWQw&riu=http%3a%2f%2fcompanies.naukri.com%2fsimplilearn-jobs%2fwp-content%2fuploads%2fsites%2f24521%2f2018%2f03%2fsimplilearn-OG-TAG-LOGO.gif&ehk=OppDcihK2pSfqBaOW8K%2bm88eqay4vTnr5GFqK8qxkCI%3d&risl=&pid=ImgRaw&r=0",
      title: "Machine Learning",
      platform: "SimpliLearn",
      link: "https://simpli-web.app.link/e/BIN1H28VqUb"
    },
    {
      img: "https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg",
      title: "CV Writing & Interview",
      platform: "10 Minute School",
      link: "https://10minuteschool.com/certificate/6835aa6ba2a42/"
    },
    {
      img: "https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg",
      title: "Email Writing",
      platform: "10 Minute School",
      link: "https://10minuteschool.com/certificate/6835aa6ba2a42/"
    },

  ];

  return (
    <div className="px-6 lg:px-16 py-12 space-y-16">
      <Helmet>
        <title>About | Nazir</title>
        <meta name="description" content="Nazir Hossain's personal portfolio homepage." />
      </Helmet>
      <div className="flex flex-col md:flex-row items-center gap-10 bg-purple-50 p-6 rounded-xl shadow-md">
        <div className="md:w-1/2 w-full">
          <Lottie animationData={education} loop autoplay />
        </div>

        <div className="md:w-1/2 w-full space-y-4">
          <img
            src='https://mbstu.ac.bd/wp-content/uploads/2023/08/MBSTU_logo.png'
            alt="MBSTU"
            className="w-20 h-20 mt-2 hidden md:flex"
          />
          <h2 className="text-2xl lg:text-3xl font-bold">Educational Qualification</h2>

            <h3 className="text-xl font-semibold ">B.Sc in Information and Communication Technology</h3>
            <a
              href="https://mbstu.ac.bd"
              target="_blank"
              className="text-indigo-600 hover:underline mt-4 "
            >
              Mawlana Bhashani Science and Technology University
            </a>

        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((certificate, id) => (
            <a
              key={id}
              href={certificate.link}
              target="_blank"
              className="flex items-center gap-4 bg-indigo-50 p-4 rounded-xl  hover:scale-105 transition-transform duration-300 shadow-md"
            >
              <img src={certificate.img} alt={certificate.platform} className="w-16 h-16 object-contain" />
              <div>
                <h4 className="text-lg font-semibold">{certificate.title}</h4>
                <p className="text-gray-600">{certificate.platform}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
