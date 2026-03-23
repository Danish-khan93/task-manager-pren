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
        className="w-2 h-2 accent-red-900 m-1"
        type="checkbox"
        name={name}
        checked={checked}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setChecked(e?.target?.checked);
        }}
      />
      <p>{label}</p>
    </label>
  );
};

export default CustomCheckBox;
