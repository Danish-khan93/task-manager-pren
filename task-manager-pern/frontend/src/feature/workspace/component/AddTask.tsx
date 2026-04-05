import React, { useEffect, useRef, useState } from "react";
import { iconMap } from "../../../constant/icons";

const AddTask = () => {
  const [hideAndShow, setHideAndShow] = useState<boolean>(false);

  const tempRef = useRef<HTMLDivElement>(null);
  console.log(tempRef);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      console.log(event, "User clicked somewhere on page");
      setHideAndShow(false);
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div ref={tempRef}>
      {!hideAndShow && (
        <button
          className="w-full text-left flex items-center gap-2 cursor-pointer "
          onClick={() => {
            setHideAndShow(!hideAndShow);
          }}
        >
          {iconMap["plus"]} Add task
        </button>
      )}
      {hideAndShow && (
        <div>
          <textarea
            className="bg-white rounded-lg p-1 w-full h-20"
            placeholder="Add task..."
            onChange={(e) => {
              console.log(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setHideAndShow(false);
              }
            }}
          />
        </div>
      )}
    </div>
  );
};

export default React.memo(AddTask);
