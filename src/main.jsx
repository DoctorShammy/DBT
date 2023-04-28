import {createBrowserRouter, RouterProvider, Link} from "react-router-dom"
import About from "./About";
import App from "./App";
import {createRoot} from "react-dom/client"
import Kryssblad from "./componets/Kryssblad/Kryssblad";

const router = createBrowserRouter([
{
path: "/",
element: <App />,
},

{
path: "about",
 element: <About />
},
{
  path: "kryssblad",
   element: <Kryssblad />
  }
])
createRoot(document.getElementById("root")).render(

  <RouterProvider router={router} />
  
);

