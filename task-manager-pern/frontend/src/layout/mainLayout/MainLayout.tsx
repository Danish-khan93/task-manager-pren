import type { FC } from "react";
import Sidebar from "./mainLayoutComponent/Sidebar";
import Topbar from "./mainLayoutComponent/Topbar";
import { Outlet } from "react-router-dom";

type Props = {
  children?: React.ReactNode;
};

const MainLayout: FC<Props> = (props) => {
  const { children } = props;
  return (
    <div className="flex">
      <div className="bg-green-400 h-screen">
        <Sidebar />
      </div>
      <div className="w-full">
        <div className="h-15">
          <Topbar />
        </div>
        <div>{children}</div>
        <Outlet/>
      </div>
    </div>

    
  );
};

export default MainLayout;
