import { createBrowserRouter } from "react-router-dom";
import Login from "../feature/auth/pages/Login";
import Signup from "../feature/auth/pages/Signup";

interface RouteMap {
  [key: string]: React.ComponentType; // key = route path, value = component
}

export const routeConfig: RouteMap = {
  "login": Login,
  "signup": Signup,
};


export const routes = createBrowserRouter(
   Object.entries(routeConfig).map(([path, Component]) => ({
    path: `/${path}`,
    element: <Component />,
  }))
)