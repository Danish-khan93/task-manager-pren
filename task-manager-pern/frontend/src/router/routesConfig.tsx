import Login from "../feature/auth/pages/Login";
import Signup from "../feature/auth/pages/Signup";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
 
]);
