import Fab from "@mui/material/Fab";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "theme/theme";

const LightSwitch = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      position="absolute"
      bottom={16}
      right={16}
    >
      <Fab
        sx={{ backgroundColor: colors.blueAccent[200] }}
        onClick={colorMode.toggleColorMode}
      >
        {theme.palette.mode === "dark" ? (
          <LightModeIcon />
        ) : (
          <DarkModeIcon sx={{ color: colors.grey[900] }} />
        )}
      </Fab>
    </Box>
  );
};

export default LightSwitch;
