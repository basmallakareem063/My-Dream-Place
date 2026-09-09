import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Discover from "../Pages/Discover";
import About from "../Pages/About";
import Activities from "../Pages/Activities";
import Contact from "../Pages/Contact";

export const router = createBrowserRouter(
  [
    {
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/discover",
          element: <Discover />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/activities",
          element: <Activities />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ],
  // {
  //   basename: "/Airplane",
  // },
);
