import type { FC } from "react";
import { FaPlus } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
const iconMap = {
  plus: <FaPlus />,
  edit: <MdEdit />,
  delete: <MdDelete />,
  hidePass: <FaEye />,
  showPass: <FaEyeSlash />,
  google: <FaGoogle />,
};
type Props = {
  type: "button" | "submit";
  variant: "icon" | "text" | "iconText";
  label?: string;
  icon?: keyof typeof iconMap; // allows only iconMap key names (auto-suggest & type-safe)
};

const CustomButton: FC<Props> = (props) => {
  // learning tips
  // in destructuring assing value  with = if use : mean rename the name
  const { type = "button", label, icon, variant = "iconText" } = props;

  const styling = {
    icon: "w-[40px] h-[40px] p-2 rounded-full flex justify-center items-center",
    text: "mim-w-42 w-full py-1 px-2 rounded-md whitespace-nowrap",
    iconText:
      "min-w-42 w-full py-1 px-2 rounded-md flex justify-center items-center gap-3 whitespace-nowrap",
  };

  return (
    <button
      type={type}
      className={`${variant && styling[variant]} font-medium bg-primary text-white my-1 cursor-pointer `}
    >
      <span>{icon && iconMap[icon]}</span>
      <span>{label && label}</span>
    </button>
  );
};

export default CustomButton;
