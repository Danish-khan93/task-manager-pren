// in this compoont i make recusive and links button and tooltip
// topic cover recursive state
// make collaps and links and incon bar show and hide

import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../../component";
const sideBarMenu = [
  {
    icon: "dashboard",
    title: "Dashboard",
    path:"/dashboard"
  },
  {
    icon: "workSpace",
    title: "Work Space",
    path:"/work-space"
  },
  {
    icon: "setting",
    title: "Settings",
    path:"settings"
  },
] as const // as const is typescript feature Treat this value and everything inside it as completely immutable and literal.

const Sidebar = () => {
  const navigate = useNavigate()
  return (
    <div className="flex items-center flex-col gap-2  w-[200px] h-full shadow-lg bg-primary py-2 px-2">
      <div className="h-15 w-full flex items-center justify-center bg-red-900">
        brand icon
      </div>
      <div>
        {
          sideBarMenu?.map((value,index)=>{
            return (
              <CustomButton handleClick={()=>{navigate(value?.path)}} key={index} type="button" icon={value?.icon} label={value?.title} variant="iconText"/>
            )
          })
        }
      </div>
    </div>
  );
};

export default Sidebar;
