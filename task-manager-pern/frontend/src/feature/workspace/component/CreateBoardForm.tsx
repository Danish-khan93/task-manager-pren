import { useForm } from "react-hook-form";
import {
  CustomButton,
  CustomColorPicker,
  CustomInput,
  CustomText,
} from "../../../component";
import type { FC } from "react";

type formType = { bgColor: string; boardName: string };

type Props = {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}


const CreateBoardForm:FC<Props> = ({setOpenModal}) => {
  const { handleSubmit, register } = useForm<formType>({
    defaultValues: {
      bgColor: "",
      boardName: "",
    },
  });

  const onSubmit = (values: formType) => {
    console.log(values);
    setOpenModal(false)
  };

  return (
    <div className="flex flex-col items-center">
      <CustomText variant="h3">Create Board</CustomText>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomColorPicker label="Background Color" {...register("bgColor")} />
        <CustomInput
          type="text"
          label="Board Name"
          {...register("boardName")}
        />
        <CustomButton label="Create" variant="text" type="submit" />
      </form>
    </div>
  );
};

export default CreateBoardForm;
