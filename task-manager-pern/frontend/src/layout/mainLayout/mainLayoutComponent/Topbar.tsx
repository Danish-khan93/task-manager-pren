// notification, search ,profile

import { CustomPopover, CustomSearch } from "../../../component";

const Topbar = () => {
  return (
    <div
      className="w-full h-full shadow-lg flex items-center px-2 justify-end gap-3"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div><CustomSearch/></div>
      <div>
        <CustomPopover icon="notification">
          <p>dnaish</p>
        </CustomPopover>

      </div>
      <div>profile</div>
    </div>
  );
};

export default Topbar;
