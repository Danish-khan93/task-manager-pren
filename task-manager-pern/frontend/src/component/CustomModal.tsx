import { useState, type FC, type ReactNode } from "react";
import CustomButton from "./CustomButton";
import { iconMap } from "../constant/icons";

type Props = {
  type: "button" | "submit";
  variant: "icon" | "text" | "iconText";
  label?: string;
  icon?: keyof typeof iconMap; // allows only iconMap key names (auto-suggest & type-safe)
  handleClick?: () => void;
  children: ReactNode;
};

const CustomModal: FC<Props> = (props) => {
  const { type = "button", label, variant, children, icon } = props;

  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="">
      <CustomButton
        type={type}
        label={label}
        variant={variant}
        handleClick={handleModal}
        icon={icon}
      />

      {openModal && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center"
          onClick={() => {
            setOpenModal(false);
          }}
        >
          <div
            className="p-2 flex flex-col min-w-[400px] h-auto min-h-[300px] z-40 bg-white rounded-lg shadow-lg fixed top-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            onClick={(e) => {
              e.stopPropagation();
            }} // the upper dive cover full so that why use stopPropagtion if use click inside
          >
            <div className="flex justify-end">
              <CustomButton
                icon={"cancel"}
                variant="icon"
                type={"button"}
                handleClick={() => setOpenModal(false)}
              />
            </div>
            <div className="flex-1">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomModal;
