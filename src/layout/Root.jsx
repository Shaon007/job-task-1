
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";


const Root = () => {

  return (
    <div className="font-mono w-full">
      <Navbar />
      <div className="w-11/12 mx-auto">
        <Outlet />
        <Footer />
        <Toaster position="top-right" />
      </div>
    </div>
  );
};

export default Root;