import type { FC, ReactNode, JSX } from "react";

type Props = {
  children: ReactNode;
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
};

const CustomText: FC<Props> = (props) => {
  const { children, variant } = props;

  const Component = variant as keyof JSX.IntrinsicElements; //Treat variant as a valid HTML tag that React can render

  const styleText = {
    h1: "text-xl font-bold",
    h2: "text-xl font-semibold",
    h3: "text-lg font-semibold",
    h4: "text-lg font-medium",
    h5: "text-md font-medium",
    h6: "text-md font-normal",
    p: "text-sm font-normal",
  };

  return <Component className={`heading-text ${styleText[variant]}`}>{children}</Component>;
};

export default CustomText;
