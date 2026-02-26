import { useState, type FC } from "react";

type Props = {
  label: string;
  name: string;
  value?: string;
};

const CustomCheckBox: FC<Props> = (props) => {
  const [checked, setChecked] = useState<boolean>(false);
  const { label, name } = props;
  return (
    <label className="flex gap-2 items-center ">
      <input
        className="w-[15px] h-[15px] accent-red-900 m-1"
        type="checkbox"
        name={name}
        checked={checked}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          console.log(e?.target.checked);
          setChecked(e?.target?.checked);
        }}
      />
      <p>{label}</p>
    </label>
  );
};

export default CustomCheckBox;
