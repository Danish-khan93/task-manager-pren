import type { FC } from "react";

type Props = {
  label: string;
  name?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  setName?: string;
};

const options = [
  { id: 1, value: "Small Business" },
  { id: 2, value: "Marketing Agency" },
  { id: 3, value: "Startup" },
  { id: 4, value: "Enterprise" },
  { id: 5, value: "E-commerce" },
  { id: 6, value: "Software Company" },
  { id: 7, value: "Consulting Firm" },
  { id: 8, value: "Non-profit Organization" },
  { id: 9, value: "Educational Institution" },
  { id: 10, value: "Other" },
];

const CustomDropDown: FC<Props> = (props) => {
  const { label, name, onChange, ...rest } = props;

  return (
    <div className="flex flex-col items-start m-1">
      <label htmlFor={name}>{label}</label>
      <select
        className="outline-none form-input"
        name={name}
        {...rest}
        onChange={(e) => {
          onChange?.(e);
        }}
      >
        <option>select</option>
        {options.map((option) => {
          return (
            <option key={option?.id} value={option?.id}>
              {option?.value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CustomDropDown;
