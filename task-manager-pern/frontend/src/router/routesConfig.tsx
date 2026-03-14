import Login from "../feature/auth/pages/Login";
import Signup from "../feature/auth/pages/Signup";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../feature/dashboard/pages/Dashboard";
import WhiteLabel from "../feature/settings/whiteLabeling/pages/WhiteLabel";
import MainLayout from "../layout/mainLayout/MainLayout";
import WorkSpace from "../feature/workspace/pages/WorkSpace";
import Settings from "../feature/settings/pages/Settings";
import Board from "../feature/workspace/pages/Board";
import CreateWorkSpace from "../feature/auth/pages/CreateWorkSpace";
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
    path: "/work-space",
    element: <CreateWorkSpace />,
  },


  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/work-space",
        element: <WorkSpace />,
      },
      {
        path: "/work-space/:id",
        element: <Board />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/white-label",
        element: <WhiteLabel />,
      },
    ],
  },
]);
