import type { FC, ReactNode, JSX } from "react";

type Props = {
  children: ReactNode;
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
};

const CustomText: FC<Props> = (props) => {
  const { children, variant } = props;

  const Component = variant as keyof JSX.IntrinsicElements; //Treat variant as a valid HTML tag that React can render

  const styleText = {
    h1: "text-xl font-bold text-typography",
    h2: "text-xl font-semibold text-typography",
    h3: "text-lg font-semibold text-typography",
    h4: "text-lg font-medium text-typography",
    h5: "text-md font-medium text-typography",
    h6: "text-md font-normal text-typography",
    p: "text-sm font-normal text-typography",
  };

  return <Component className={`${styleText[variant]}`}>{children}</Component>;
};

export default CustomText;
