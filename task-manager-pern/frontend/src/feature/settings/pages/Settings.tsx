import { CustomTabs } from "../../../component";
import { settingsTabs } from "../../../constant/tabs";
import WhiteLabel from "../whiteLabeling/pages/WhiteLabel";

const Settings = () => {
  return (
    <div>
      <CustomTabs tabHeader={settingsTabs}>
        <WhiteLabel />
      </CustomTabs>
    </div>
  );
};

export default Settings;
