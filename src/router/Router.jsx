import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Root from "../layout/Root";

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <></>,
    children: [
      {
        path: "/",
        element: <Home />,

      },
      {
        path: "/about",
        element: <a/>,

      },
      {
        path: "/mywork",
        element: <Home />,

      },
      {
        path: "/skills",
        element: <Home />,

      },
      {
        path: "/contact",
        element: <Home />,

      },

    ]
  }
])

export default Router;