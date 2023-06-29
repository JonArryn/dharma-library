import { Outlet } from "react-router-dom";
import AppNavFrame from "./component/AppNavFrame";

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
