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
    <div className="flex w-full" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="h-screen sticky top-0">
        <Sidebar />
      </div>
      <div className="w-full">
        <div className="h-15 sticky top-0">
          <Topbar />
        </div>
        <div className="mx-4">
          {children}

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
