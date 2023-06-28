import { Outlet } from "react-router-dom";
import AppNavFrame from "./component/AppNavFrame";
import Grid from "@mui/material/Grid";

const AppLayout = () => {
  return (
    <>
      <AppNavFrame>
        <Outlet />
      </AppNavFrame>
    </>
  );
};

export default AppLayout;
