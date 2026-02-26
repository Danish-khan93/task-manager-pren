import type { FC } from "react";

type Props = {
  children: React.ReactNode;
};

const AuthLayout: FC<Props> = (props) => {
  const { children } = props;
  return <div className="flex justify-center items-center w-screen h-screen">{children}</div>;
};

export default AuthLayout;
