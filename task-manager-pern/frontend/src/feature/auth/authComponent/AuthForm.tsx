import { Link } from "react-router-dom";
import type { FC } from "react";
import { CustomButton, CustomInput } from "../../../component";
import { useForm } from "react-hook-form";
import {
  loginFormValues,
  signUpFormValues,
} from "../initalValuesAndSchema/intialValues";
import type { SignupForm, LoginFormType } from "../types/authype";
// import { phoneNumberFormat } from "../../../utiles/inputServices";

type Props = {
  type: "signup" | "login";
};

const AuthForm: FC<Props> = (props) => {
  const { type } = props;

  // react hook form setup
  const { handleSubmit, register } = useForm<LoginFormType | SignupForm>({
    defaultValues: type === "login" ? loginFormValues : signUpFormValues,
  });

  const onSubmit = (values: SignupForm | LoginFormType) => {
    console.log(values);
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm shadow-lg rounded-lg p-9 w-[350px]">
      <div className="flex justify-center my-2">image brand logo</div>
      <div className="flex justify-center my-2">
        <CustomButton
          type="button"
          icon={"google"}
          label="Google"
          variant="iconText"
        />
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          {type === "signup" && (
            <>
              <CustomInput
                type="text"
                // name={"firstName"}
                placeHolder="Enter your Name"
                maxLength={20}
                label={"First Name"}
                {...register("firstName")}
              />
              <CustomInput
                type="text"
                placeHolder="Enter your last Name"
                maxLength={20}
                label={"Last Name"}
                {...register("lastName")}
              />
            </>
          )}
          <CustomInput
            type="email"
            placeHolder="Enter your Email"
            label={"Email"}
            {...register("email")}
          />
          <CustomInput
            type="password"
            placeHolder="Enter your Password"
            label={"Password"}
            {...register("password")}
          />
          {/* THIS IS FOR KNOWLEGDE  */}
          {/* <CustomInput
            type="text"
            placeHolder="Enter your Password"
            label={"Phone Number"}
            {...register("phoneNumber",  {
              onChange: (e) => {
                const formattedValue = e?.target?.value;
                const format = phoneNumberFormat(formattedValue,"phoneNumber");
                console.log(format);
                
                e.target.value = format;
              },
            })}
            // pattren="\(ddd\) ddd-dddd"
            maxLength={14}
            minLength={14}
          /> */}
          <CustomButton
            label={type === "signup" ? "Sign up with Email" : "Log in"}
            variant="text"
            type="submit"
          />
        </form>
      </div>
      <div className="flex justify-center">
        <Link className="text-primary" to="#">
          Forgot Password?
        </Link>
      </div>
      <div className="flex justify-center">
        {type === "signup" ? (
          <p>
            Already have an account?{" "}
            <Link className="text-blue-900 font-medium" to={"/"}>
              Sign in
            </Link>
          </p>
        ) : (
          <p>
            Don't have an account?{" "}
            <Link className="text-blue-900 font-medium" to={"/signup"}>
              Sign up
            </Link>{" "}
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
