import type { FC } from "react";
import authBgImage from "../../../assets/saas-app-auth-bg.jpg";
type Props = {
  children: React.ReactNode;
};

const AuthLayout: FC<Props> = (props) => {
  const { children } = props;
  return (
    <div
      className="flex justify-center items-center w-screen h-screen"
      style={{
        backgroundImage: `url(${authBgImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover"
      }}
    >
      {children}
    </div>
  );
};

export default AuthLayout;
