import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer id="footer" className="mt-10 border-t-2 text-base-content px-6 md:px-16 py-12">
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4 cursor-pointer" onClick={() => navigate("/")}>nazir.h</h2>
          <p className="text-gray-600">
            Feel free to contact me anywhere anytime. I'll get to you as soon as possible.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li onClick={() => navigate("/")} className="cursor-pointer hover:underline">Home</li>
            <li onClick={() => navigate("/")} className="cursor-pointer hover:underline">Projects</li>
            <li onClick={() => navigate("/")} className="cursor-pointer hover:underline">About</li>
            <li onClick={() => navigate("/")} id="" className="cursor-pointer hover:underline">Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Stay in touch</h3>

          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full rounded-r-none"
            />
            <button className="btn bg-indigo-400 text-white rounded-l-none">Send</button>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t pt-6 text-center text-gray-500 text-sm">
        © 2025 Nazir Hossain. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
