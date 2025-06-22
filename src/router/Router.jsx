import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Root from "../layout/Root";
import Error from "../pages/Error";

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