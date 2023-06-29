import { APP_SUB_NAV_ITEMS } from "../../constant/NavItems";
import SubNavBar from "app/component/SubNavBar";
import { Outlet, useNavigate } from "react-router-dom";
import ROUTES from "../../constant/ROUTES";

const Library = () => {
  const navigate = useNavigate();
  const buttons = [
    {
      buttonText: "Create Library",
      handleClick: () => navigate(ROUTES.APP.LIBRARY.CREATE),
    },
  ];
  return (
    <>
      <SubNavBar
        navItems={Object.values(APP_SUB_NAV_ITEMS.LIBRARY)}
        buttonList={buttons}
      />
      <Outlet />
    </>
  );
};

export default Library;
