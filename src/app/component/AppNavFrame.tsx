import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import React, { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { AppBar, Typography, useTheme } from "@mui/material";
import { tokens } from "theme/theme";
import { APP_SIDE_NAV_ITEMS } from "constant/NavItems";
import { useNavigate } from "react-router-dom";

const AppNavFrame = ({ children }: { children: React.ReactNode }) => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const smBreakpoint = theme.breakpoints.values["sm"];
  const navigate = useNavigate();

  useEffect(() => {
    const handleResizeWindow = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const drawerWidth = 240;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (route: string) => {
    navigate(route);
  };

  const DrawerList = () => (
    <div>
      <Toolbar />
      {/* Section 1 */}
      <Divider />
      <List>
        {Object.values(APP_SIDE_NAV_ITEMS).map((navItem, index) => (
          <ListItem key={index + navItem.name}>
            <ListItemButton onClick={() => handleNavClick(navItem.route)}>
              <Typography>{navItem.name}</Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* Section 2 */}
      <List>
        {["Placeholder 1", "Placeholder 2", "Placeholder 3"].map(
          (navItem, index) => (
            <ListItem key={index + navItem}>
              <ListItemButton>
                <Typography>{navItem}</Typography>
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  const ResponsiveSideDrawer = ({
    children,
  }: {
    children: React.ReactNode;
  }) => (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{ keepMounted: true }}
      sx={{
        display: "block",
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
      }}
    >
      {children}
    </Drawer>
  );

  const StandardSideDrawer = ({ children }: { children: React.ReactNode }) => (
    <Drawer
      variant="permanent"
      sx={{
        display: "block",
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
      }}
      open
    >
      {children}
    </Drawer>
  );

  const TopAppBar = () => (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        backgroundColor: colors.primary[400],
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h5"
          noWrap
          color={colors.primary[100]}
        >
          Dharma Library
        </Typography>
      </Toolbar>
    </AppBar>
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <TopAppBar />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          {viewportWidth < smBreakpoint ? (
            <ResponsiveSideDrawer>
              <DrawerList />
            </ResponsiveSideDrawer>
          ) : (
            <StandardSideDrawer>
              <DrawerList />
            </StandardSideDrawer>
          )}
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            minWidth: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar sx={{ mt: 0 }} />
          {children}
        </Box>
      </Box>
    </>
  );
};

export default AppNavFrame;
