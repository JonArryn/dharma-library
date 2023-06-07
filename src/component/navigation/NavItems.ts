import APP_ROUTES from 'constant/ROUTES';

interface NavItem {
	name: string;
	route: string;
}

interface TopNavItems {
	HOME: NavItem;
	LIBRARIES: NavItem;
	BOOKS: NavItem;
}

interface TopNavUserItems {
	LOGIN: NavItem;
	SIGN_UP: NavItem;
}

const TOP_NAV_ITEMS: TopNavItems = {
	HOME: {
		name: 'Home',
		route: APP_ROUTES.HOME,
	},
	LIBRARIES: {
		name: 'Libraries',
		route: APP_ROUTES.LIBRARY,
	},
	BOOKS: {
		name: 'Books',
		route: APP_ROUTES.BOOK,
	},
};

const TOP_NAV_USER_ITEMS: TopNavUserItems = {
	LOGIN: {
		name: 'Login',
		route: '/login',
	},
	SIGN_UP: { name: 'Sign Up', route: '/signup' },
};

export { TOP_NAV_ITEMS, TOP_NAV_USER_ITEMS };
