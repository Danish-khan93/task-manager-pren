import type { FC } from "react";
import { iconMap } from "../constant/icons";

 export type Props = {
  type: "button" | "submit";
  variant: "icon" | "text" | "iconText";
  label?: string;
  icon?: keyof typeof iconMap; // allows only iconMap key names (auto-suggest & type-safe)
  handleClick?: () => void;
};

const CustomButton: FC<Props> = (props) => {
  // learning tips
  // in destructuring assing value  with = if use : mean rename the name
  const {
    type = "button",
    label,
    icon,
    variant = "iconText",
    handleClick,
  } = props;

  const styling = {
    icon: "w-[30px] h-[30px] p-2 rounded-full flex justify-center items-center",
    text: "mim-w-42 w-full py-1 px-2 rounded-md whitespace-nowrap",
    iconText:
      "min-w-42 w-full py-1 px-2 rounded-md flex justify-start items-center gap-5 whitespace-nowrap",
  };

  return (
    <button
      type={type}
      className={`${variant && styling[variant]} font-medium bg-primary text-white my-1 cursor-pointer `}
      onClick={handleClick}
    >
      <span>{icon && iconMap[icon]}</span>
      <span>{label && label}</span>
    </button>
  );
};

export default CustomButton;
