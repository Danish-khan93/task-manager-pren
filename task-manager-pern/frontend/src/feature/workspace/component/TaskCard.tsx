import { CustomText } from "../../../component";
import { iconMap } from "../../../constant/icons";

const TaskCard = () => {
  return (
    <div className="w-full p-2 rounded-lg bg-white">
      <div className="flex items-center gap-3">
        <CustomText variant="h4">Proirty {"high"}</CustomText>
        <div className="bg-amber-700 w-12 h-2 rounded-2xl"></div>
      </div>
      <CustomText variant="h5">Task Card</CustomText>
      <div className="flex items-center gap-4 mt-2">
        <span className="flex items-center gap-1">
          {iconMap["comment"]}
          <CustomText variant="p">12</CustomText>
        </span>
        <span className="flex items-center gap-1">
          {iconMap["attachment"]}
          <CustomText variant="p">12</CustomText>
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
