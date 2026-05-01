import { lazy } from "react";
const Home = lazy(() => import("../page/Home"));
const Products = lazy(() => import("../page/Products"));
const Contact = lazy(() => import("../page/Contact"));
const About = lazy(() => import("../page/About"));
const Partner = lazy(() => import("../page/Partner"));
const Branch = lazy(() => import("../page/Branch"));

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/branch",
    element: <Branch />,
  },
  {
    path: "/partner",
    element: <Partner />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];
