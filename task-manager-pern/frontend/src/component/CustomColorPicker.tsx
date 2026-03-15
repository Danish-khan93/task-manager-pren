import type { FC } from "react";

type Props = {
  label: string;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.ChangeEventHandler<HTMLInputElement>;
  ref?: React.Ref<HTMLInputElement>;
  value?:string
};

const CustomColorPicker: FC<Props> = (props) => {
  const { label, name, onChange, onBlur, ref,value} = props;
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        ref={ref}
        name={name}
        onBlur={onBlur}
        className="form-input"
        value={value}
        type="color"
        onChange={(e) => {
          console.log(e.target?.value);
          onChange?.(e);
        }}
      />
    </div>
  );
};

export default CustomColorPicker;
