// in this compoont i make recusive and links button and tooltip
// topic cover recursive state
// make collaps and links and incon bar show and hide

import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { iconMap } from "../../../constant/icons";
import { useState } from "react";
const sideBarMenu = [
  {
    icon: "dashboard",
    title: "Dashboard",
    path: "/dashboard",
    id: 0,
  },
  {
    icon: "workSpace",
    title: "Boards",
    path: "/work-space",
    id: 1,
  },
  {
    icon: "setting",
    title: "Settings",
    path: "settings",
    id: 2,
  },
] as const; // as const is typescript feature Treat this value and everything inside it as completely immutable and literal.

const Sidebar = () => {
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState<number>(0);

// handle logout

const handleLogout = ()=>{
  
}



  return (
    <div
      className="flex items-center flex-col gap-2 w-48 h-full shadow-lg py-2 px-2"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="h-15 w-full flex items-center justify-center">
        <img src={logo} className="w-full h-full object-contain" />
      </div>
      <div>
        {sideBarMenu?.map((value, index) => {
          return (
            <button
              onClick={() => {
                navigate(value?.path);
                setIsActive((preVal) => {
                  if (preVal === value?.id) {
                    return preVal;
                  } else {
                    return (preVal = value.id);
                  }
                });
              }}
              key={index}
              type="button"
              className={`flex justify-start items-center gap-3 cursor-pointer py-2 px-3 w-full rounded-lg my-2 ${isActive === value.id ? "text-blue-700" : ""} hover:backdrop-opacity-20`}
            >
              {iconMap[value?.icon]}
              {value?.title}
            </button>
          );
        })}
      </div>
      <div>
        <button
          onClick={() => {
            navigate("/");
            handleLogout()
          }}
          type="button"
          className={`flex justify-start items-center gap-3 cursor-pointer py-2 px-3 w-full rounded-lg my-2 hover:backdrop-opacity-20`}
        >
          {/* {iconMap[value?.icon]} */}
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
