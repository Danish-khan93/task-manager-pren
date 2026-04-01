// in this i make a icon button
// and when i click popover open and they show child i pass inside popover and when i click outside of popover it will close
// i want outside click close the popover it is ramain 




import React, { useRef, useState, type FC } from "react";
import CustomButton from "./CustomButton";
import type { iconMap } from "../constant/icons";

type Props = {
  children: React.ReactNode;
  icon: keyof typeof iconMap;
};

const CustomPopover: FC<Props> = (props) => {
  const { children, icon } = props;

  const popRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <main className="relative">
      <section>
        <CustomButton
          variant="icon"
          type="submit"
          icon={icon}
          handleClick={() => setIsOpen(!isOpen)}
        />
      </section>
      {isOpen && (
        <section
          ref={popRef}
          className="w-sm bg-white shadow-lg absolute top-10 right-0 min-h-80 flex flex-1 rounded-md p-2"
        >
          {children}
        </section>
      )}
    </main>
  );
};

export default CustomPopover;
