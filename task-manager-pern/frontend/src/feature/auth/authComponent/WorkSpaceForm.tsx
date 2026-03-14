import { useForm } from "react-hook-form";
import {
  CustomButton,
  CustomDropDown,
  CustomInput,
  CustomText,
} from "../../../component";

const WorkSpaceForm = () => {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      workSpaceName: "",
      workSpaceType: "",
      workSpaceTypeId: 1,
    },
  });

  const onSubmit = (values: {
    workSpaceName: string;
    workSpaceType: string;
    workSpaceTypeId: number;
  }) => {
    console.log(values);
  };

  return (
    <div className="p-2">
      <div className="flex justify-center">
        <CustomText variant="h3">Create Your workspace</CustomText>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          type="text"
          label="Workspace Name"
          {...register("workSpaceName")}
         
        />
        <CustomDropDown label="Company Type" {...register("workSpaceTypeId")} />
        <CustomButton label="Create WorkSpace" type={"submit"} variant="text" />
      </form>
    </div>
  );
};

export default WorkSpaceForm;
