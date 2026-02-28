import type { FC } from "react";
import Sidebar from "./mainLayoutComponent/Sidebar";
import Topbar from "./mainLayoutComponent/Topbar";

type Props = {
  children: React.ReactNode;
};

const MainLayout: FC<Props> = (props) => {
  const { children } = props;
  return (
    <div>
      <div>
        <Topbar />
      </div>
      <div>
        <div>
          <Sidebar />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
