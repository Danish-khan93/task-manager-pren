import type { FC } from "react";
import { FaPlus } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
const iconMap = {
  plus: <FaPlus />,
  edit: <MdEdit />,
  delete: <MdDelete />,
  hidePass: <FaEye />,
  showPass: <FaEyeSlash />,
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
    icon: "w-[40px] h-[40px] p-2 rounded-full bg-white border-4 border-red-300 flex justify-center items-center",
    text: "max-w-42 py-1 px-2 rounded-md bg-red-300 whitespace-nowrap",
    iconText:
      "py-1 px-2 rounded-md flex justify-center items-center gap-3 bg-red-300 whitespace-nowrap",
  };

  return (
    <button
      type={type}
      className={`${variant && styling[variant]} m-1 cursor-pointer `}
    >
      <span>{icon && iconMap[icon]}</span>
      <span>{label && label}</span>
    </button>
  );
};

export default CustomButton;
