import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import { ColorModeContext, useMode } from "theme/theme";

interface IProps {
  children: React.ReactNode[];
}

const GlobalsProvider = ({ children }: IProps) => {
  const { theme, colorMode } = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default GlobalsProvider;
