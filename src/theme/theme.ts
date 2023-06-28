import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { darkMode, lightMode, customFontFamily } from "./colorPalette";

type Mode = "light" | "dark";

export const tokens = (mode: Mode) => (mode === "dark" ? darkMode : lightMode);

export const themeSettings = (mode: Mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: customFontFamily,
      fontSize: 12,
      h1: { fontFamily: customFontFamily, fontSize: 40 },
      h2: { fontFamily: customFontFamily, fontSize: 32 },
      h3: { fontFamily: customFontFamily, fontSize: 24 },
      h4: { fontFamily: customFontFamily, fontSize: 20 },
      h5: { fontFamily: customFontFamily, fontSize: 16 },
      h6: { fontFamily: customFontFamily, fontSize: 14 },
    },
  };
};

// context for color mode

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState<Mode>("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return { colorMode: colorMode, theme: theme };
};
