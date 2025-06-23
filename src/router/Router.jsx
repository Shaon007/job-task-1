import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Root from "../layout/Root";
import Error from "../pages/Error";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home />,

      },
      {
        path: "/projects",
        element: <Projects/>,

      },
      {
        path: "/skills",
        element: <Skills/>,

      },

    ]
  }
])

export default Router;