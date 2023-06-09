import './index.css'
import React from "react";
import ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Gallery from './components/Gallery/Gallery';
import Rider from './components/Rider/Rider';
import Location from './components/Location/Location';
import Slogan from './components/Slogan/Slogan';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"/Gallery",
    element: <Gallery />,
  },
  {
    path:"/Rider",
    element: <Rider/>,
  },
  {
    path: "/Slogan",
    element: <Slogan/>,
  },
  {
    path:'/Location',
    element: <Location/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);