import { Link } from "react-router-dom";
import type { FC } from "react";
import { CustomButton, CustomInput } from "../../../component";

type Props = {
  type: "signup" | "login";
};

const AuthForm: FC<Props> = (props) => {
  const { type } = props;
  return (
    <div className="bg-white/95 backdrop-blur-sm shadow-lg rounded-lg p-9 w-[350px]">
      <div className="flex justify-center my-2">image brand logo</div>
      <div className="flex justify-center my-2">
        <CustomButton type="button" icon={"google"} label="Google" variant="iconText"/>
      </div>
      <div>
        <form className="flex flex-col gap-2">
          {type === "signup" && (
            <CustomInput
              type="text"
              name={"firstName"}
              placeHolder="Enter your Name"
              maxLength={20}
              label={"Full Name"}
            />
          )}
          <CustomInput
            type="email"
            name={"email"}
            placeHolder="Enter your Email"
            label={"Email"}
          />
          <CustomInput
            type="password"
            name={"password"}
            placeHolder="Enter your Password"
            label={"Password"}
          />
          <CustomButton
            label={type === "signup" ? "Sign up with Email" : "Log in"}
            variant="text"
            type="submit"
          />
        </form>
      </div>
      <div className="flex justify-center"><Link className="text-primary" to="#">Forgot Password?</Link></div>
      <div className="flex justify-center">
        {type === "signup" ? (
          <p>
            Already have an account? <Link className="text-blue-900 font-medium" to={"/"}>Sign in</Link>
          </p>
        ) : (
          <p>
            Don't have an account? <Link className="text-blue-900 font-medium" to={"/signup"}>Sign up</Link>{" "}
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
