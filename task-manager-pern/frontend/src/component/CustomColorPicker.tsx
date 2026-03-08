import type { FC } from "react";

type Props = {
  label: string;
  name: string;
};

const CustomColorPicker: FC<Props> = (props) => {
  const { label, name } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type="color" name={name} id={name}/>
    </div>
  );
};

export default CustomColorPicker;
