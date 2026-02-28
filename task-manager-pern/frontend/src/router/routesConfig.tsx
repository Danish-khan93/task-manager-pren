import Login from "../feature/auth/pages/Login";
import Signup from "../feature/auth/pages/Signup";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../feature/dashboard/pages/Dashboard";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashbord",
    element: <Dashboard />,
  },
]);
