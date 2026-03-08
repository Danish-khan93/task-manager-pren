import Login from "../feature/auth/pages/Login";
import Signup from "../feature/auth/pages/Signup";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../feature/dashboard/pages/Dashboard";
import WhiteLabel from "../feature/whiteLabeling/pages/WhiteLabel";
import MainLayout from "../layout/mainLayout/MainLayout";

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
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/dashbord",
        element: <Dashboard />,
      },
      {
        path: "/white-label",
        element: <WhiteLabel />,
      },
    ],
  },
]);
