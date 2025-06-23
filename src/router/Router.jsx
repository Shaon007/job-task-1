import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Root from "../layout/Root";
import Error from "../pages/Error";
import Projects from "../pages/Projects";

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


    ]
  }
])

export default Router;