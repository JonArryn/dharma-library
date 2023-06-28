import ROUTES from "constant/ROUTES";

interface INavItem {
  name: string;
  route: string;
}

interface IMainTopNavItems {
  HOME: INavItem;
  LOGIN: INavItem;
}

interface ISideNavItems {
  DASHBOARD: INavItem;
  LIBRARY: INavItem;
  BOOK: INavItem;
}

interface IAppTopNavItems {
  LOGOUT: INavItem;
  ACCOUNT: INavItem;
}

const MAIN_TOP_NAV_ITEMS: IMainTopNavItems = {
  HOME: {
    name: "Home",
    route: ROUTES.MAIN.HOME,
  },

  LOGIN: {
    name: "Login",
    route: "/login",
  },
};

const APP_SIDE_NAV_ITEMS: ISideNavItems = {
  DASHBOARD: {
    name: "Dashboard",
    route: ROUTES.APP.DASHBOARD,
  },
  LIBRARY: {
    name: "Libraries",
    route: ROUTES.APP.LIBRARY,
  },
  BOOK: {
    name: "Books",
    route: ROUTES.APP.BOOK,
  },
};

const APP_TOP_NAV_ITEMS: IAppTopNavItems = {
  LOGOUT: {
    name: "Logout",
    route: "/app/logout",
  },
  ACCOUNT: {
    name: "My Account",
    route: "/app/account/:userId",
  },
};

export {
  MAIN_TOP_NAV_ITEMS as NAV_ITEMS,
  APP_SIDE_NAV_ITEMS,
  APP_TOP_NAV_ITEMS,
};
