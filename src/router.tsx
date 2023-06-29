import { createBrowserRouter } from "react-router-dom";
import ROUTES from "constant/ROUTES";

// PAGES
import App from "App";
import Book from "app/book/Book";
import ErrorPage from "page/error/ErrorPage";
import Library from "app/library/Library";
import Home from "page/home/Home";
import Login from "page/login/Login";

import Index from "page/Index";
import AppLayout from "app/AppLayout";
import Dashboard from "app/dashboard/Dashboard";
import MyLibrary from "app/library/Page/MyLibrary";
import MemberLibrary from "app/library/Page/MemberLibrary";
import AllLibraries from "app/library/Page/AllLibraries";
import CreateLibrary from "app/library/Page/CreateLibrary";

const router = createBrowserRouter([
  {
    path: ROUTES.MAIN.ROOT,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.MAIN.HOME,
        element: <Index />,
        children: [
          { path: ROUTES.MAIN.HOME, element: <Home /> },
          {
            path: ROUTES.MAIN.LOGIN,
            element: <Login />,
          },
        ],
      },

      {
        path: ROUTES.APP.INDEX,
        element: <AppLayout />,
        children: [
          { path: ROUTES.APP.DASHBOARD, element: <Dashboard /> },
          {
            path: ROUTES.APP.LIBRARY.VIEW_ALL,
            element: <Library />,
            children: [
              { path: ROUTES.APP.LIBRARY.VIEW_ALL, element: <AllLibraries /> },
              { path: ROUTES.APP.LIBRARY.CREATE, element: <CreateLibrary /> },
              { path: ROUTES.APP.LIBRARY.VIEW_OWNED, element: <MyLibrary /> },
              {
                path: ROUTES.APP.LIBRARY.VIEW_MEMBER,
                element: <MemberLibrary />,
              },
            ],
          },
          {
            path: ROUTES.APP.BOOK,
            element: <Book />,
          },
        ],
      },
    ],
  },
]);

export { router as default };
