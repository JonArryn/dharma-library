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
    route: ROUTES.APP.LIBRARY.VIEW_ALL,
  },
  BOOK: {
    name: "Books",
    route: ROUTES.APP.BOOK,
  },
};

const APP_TOP_NAV_ITEMS: IAppTopNavItems = {
  LOGOUT: {
    name: "Logout",
    route: ROUTES.APP.LOGOUT,
  },
  ACCOUNT: {
    name: "My Account",
    route: ROUTES.APP.ACCOUNT,
  },
};

const APP_SUB_NAV_ITEMS = {
  LIBRARY: {
    ALL: { name: "All Libraries", route: ROUTES.APP.LIBRARY.VIEW_ALL },
    OWNED: { name: "My Libraries", route: ROUTES.APP.LIBRARY.VIEW_OWNED },
    MEMBER: { name: "Member Libraries", route: ROUTES.APP.LIBRARY.VIEW_MEMBER },
  },
};

export {
  type INavItem,
  MAIN_TOP_NAV_ITEMS,
  APP_SIDE_NAV_ITEMS,
  APP_TOP_NAV_ITEMS,
  APP_SUB_NAV_ITEMS,
};
