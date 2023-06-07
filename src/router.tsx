import { createBrowserRouter } from 'react-router-dom';
import APP_ROUTES from 'constant/ROUTES';

// PAGES
import App from 'App';
import Book from 'app/book/Book';
import ErrorPage from 'app/error/ErrorPage';
import Library from 'app/library/Library';
import Home from 'app/home/Home';

const router = createBrowserRouter([
	{
		path: APP_ROUTES.ROOT,
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{ path: APP_ROUTES.HOME, element: <Home /> },
			{
				path: APP_ROUTES.LIBRARY,
				element: <Library />,
			},
			{
				path: APP_ROUTES.BOOK,
				element: <Book />,
			},
		],
	},
]);

export { router as default };
