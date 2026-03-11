// in this point i make a simple input
// other things to add
// onclick onblur and form use react hook form or formik
// validation max min lngth type icon if password
// error show remain 

import { useState, type FC } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
type Props = {
  label: string;
  name: string;
  type?: "number" | "password" | "text" | "email";
  max?: number | string;
  min?: number | string;
  maxLength?: number;
  minLength?: number;
  placeHolder?: string;
  autoComplete?: "off" | "on";
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.ChangeEventHandler<HTMLInputElement>;
  ref?: React.Ref<HTMLInputElement>;
  pattren?: string;
};

const CustomInput: FC<Props> = (props) => {
  const {
    label,
    name,
    type = "text",
    max,
    min,
    minLength,
    maxLength,
    placeHolder,
    autoComplete = "off",
    value,
    onChange,
    onBlur,
    pattren,
    ref,
  } = props;

  const [showPass, setShowPass] = useState<boolean>(false);
  const [activeInput, setActiveInput] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-start m-1">
      <label htmlFor={name}>{label}</label>
      <span
        className={`flex items-center justify-between w-full border-2 border-primary p-1 rounded-md ${activeInput ? "shadow-md" : ""}`}
      >
        <input
          pattern={pattren}
          id={name}
          className="outline-none w-full"
          autoComplete={autoComplete}
          placeholder={placeHolder}
          max={max}
          min={min}
          maxLength={maxLength}
          minLength={minLength}
          type={showPass ? "text" : type}
          value={value}
          name={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(e);
          }}
          onBlur={(e) => {
            onBlur?.(e);
            setActiveInput(false);
          }}
          onClick={() => {
            console.log("onclick run ");
          }}
          onFocus={() => {
            setActiveInput(true);
          }}
          ref={ref}
        />
        {type === "password" && (
          <span>
            {showPass ? (
              <button type="button" onClick={() => setShowPass(!showPass)}>
                <FaEye />
              </button>
            ) : (
              <button type="button" onClick={() => setShowPass(!showPass)}>
                <FaEyeSlash />
              </button>
            )}
          </span>
        )}
      </span>
    </div>
  );
};

export default CustomInput;
