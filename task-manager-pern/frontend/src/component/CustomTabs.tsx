import { useState, type FC } from "react";

type Props = {
  children: React.ReactNode;
  tabHeader: {
    label: string;
    id: number;
  }[];
};

const CustomTabs: FC<Props> = (props) => {
  const { children, tabHeader } = props;

  const [activeTab, setActiveTab] = useState<boolean | number>(1);

  return (
    <div>
      <header className="flex items-center gap-2">
        {tabHeader.map((value) => {
          return (
            <button
              onClick={() => {
                if (typeof activeTab === "number") {
                  setActiveTab((preVal) => {
                    return (preVal = value?.id);
                  });
                }
              }}
              className={`${activeTab === value?.id ? "border-b-4 border-blue-800" : ""} p-2 h-10`}
              key={value?.id}
            >
              {value?.label}
            </button>
          );
        })}
      </header>
      <main>{children}</main>
    </div>
  );
};

export default CustomTabs;
