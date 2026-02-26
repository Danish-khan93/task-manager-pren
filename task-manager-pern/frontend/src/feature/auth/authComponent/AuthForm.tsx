// import { Link } from "react-router-dom";
import type { FC } from "react";
import { CustomButton, CustomInput } from "../../../component";

type Props = {
  type: "signup" | "login";
};

const AuthForm: FC<Props> = (props) => {
  const { type } = props;
  return (
    <div>
      <div>image brand logo</div>
      <div>google login and other plateform login</div>
      <div>
        <form>
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
      <div>{/* <Link to="#">Forgot Password?</Link> */}</div>
      <div className="flex justify-center">
        {type === "signup" ? (
          <p>Already have an account? Sign in</p>
        ) : (
          <p>Don't have an account? Sign up </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
