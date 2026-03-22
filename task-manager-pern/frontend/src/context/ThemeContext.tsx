import {
  createContext,
  useContext,
  useEffect,
  useState,
  type FC,
  type ReactNode,
} from "react";

export type ThemeType = {
  typography: string;
  bg: string;
  border: string;
  label: string;
  fieldBg: string;
  buttonBg: string;
  buttonColor: string;
};

type ThemeContextType = {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
};

const defaulttheme: ThemeType = {
  typography: "#191C1E",
  bg: "#f2f2f7",
  border: "#e5e7eb",
  label: "#51617e",
  fieldBg: "#e7e8ea",
  buttonBg: "#0241c0",
  buttonColor: "#ffffff",
};


// cerate a global state 
export const ThemeContext = createContext<ThemeContextType | null>({
  theme: defaulttheme,
  setTheme: () => {},
});

type Props = {
  children: ReactNode;
};
// making provider component which wrrap hole app
export const ThemeProvider: FC<Props> = (props) => {
  const { children } = props;
  const [theme, setTheme] = useState(defaulttheme);

  // Apply to :root
  useEffect(() => {
    Object.entries(theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--color-${key}`, value);
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// custom hook
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
};
