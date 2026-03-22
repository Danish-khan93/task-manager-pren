import type { FC } from "react";
import { iconMap } from "../constant/icons";

export type Props = {
  type: "button" | "submit";
  variant: "icon" | "text" | "iconText";
  label?: string;
  icon?: keyof typeof iconMap; // allows only iconMap key names (auto-suggest & type-safe)
  handleClick?: () => void;
  width?:string
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
    width
  } = props;

  const styling = {
    icon: "w-[30px] h-[30px] flex justify-center items-center",
    text: "text-button",
    iconText: "text-button flex items-center",
  };

  return (
    <button
      type={type}
      className={`${variant && styling[variant]} ${width ? width : "w-full"}`}
      onClick={handleClick}
    >
      <span
        className={`${variant === "iconText" ? "flex-1 flex justify-center" : ""}`}
      >
        {icon && iconMap[icon]}
      </span>
      <span
        className={`${variant === "iconText" ? "flex-7 flex justify-center" : ""}`}
      >
        {label && label}
      </span>
    </button>
  );
};

export default CustomButton;
