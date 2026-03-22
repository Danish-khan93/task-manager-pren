import { type FC } from "react";
type Props = {
  children: React.ReactNode;
};

const AuthLayout: FC<Props> = (props) => {
  const { children } = props;

  return (
    <div
      className="flex justify-center items-center py-3 min-h-screen"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {children}
    </div>
  );
};

export default AuthLayout;
