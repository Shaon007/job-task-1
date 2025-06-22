
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";


const Root = () => {

  return (
    <div className="font-mono w-11/12 mx-auto">
      <Navbar></Navbar>
      <Outlet />
      <Footer/>
      <Toaster />
    </div>
  );
};

export default Root;