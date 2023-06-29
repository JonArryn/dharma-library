const ROUTES = {
  MAIN: {
    ROOT: "/",
    HOME: "/",
    LOGIN: "/login",
  },
  APP: {
    INDEX: "/app",
    DASHBOARD: "/app",
    LOGOUT: "/app/logout",
    ACCOUNT: "app/account/:userId",
    LIBRARY: {
      VIEW_ALL: "/app/library",
      CREATE: "/app/library/create",
      VIEW_OWNED: "/app/library/owned/:userId",
      VIEW_MEMBER: "/app/library/member/:memberId",
    },
    BOOK: "/app/book",
  },
};

export { ROUTES as default };
