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
            path: ROUTES.APP.LIBRARY,
            element: <Library />,
            children: [{ path: ROUTES.APP.LIBRARY }],
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
