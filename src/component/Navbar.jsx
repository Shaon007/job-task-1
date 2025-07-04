import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  const Scroll = (id) => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div id='nav' className="navbar bg-sky-50 sticky top-0 bg-opacity-90 z-50 pl-6 lg:pl-20">
      <div className="navbar-start">
        <NavLink to="/" className="text-xl md:text-2xl">nazir.h</NavLink>
      </div>

      {/* routes */}
      <div className="navbar-end hidden lg:flex lg:pr-20">
        <ul className="menu menu-horizontal px-1 flex gap-5 text-lg ">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About Me</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/skills">Skills</NavLink></li>
          <li><button onClick={() => Scroll("footer")}>Contact</button></li>
        </ul>
      </div>

      {/* Dropdown */}
      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Me</NavLink></li>
            <li><NavLink to="/projects">My Works</NavLink></li>
            <li><NavLink to="/skills">Skills</NavLink></li>
            <li><button onClick={() => Scroll("footer")}>Contact</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;