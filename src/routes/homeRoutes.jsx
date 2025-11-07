import { HomeLayout } from '../components/layout';
import { ErrorPage, Home } from '../pages';

export const homeRoutes = [
	{
		path: '',
		element: <HomeLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '',
				element: <Home />,
			},
		],
	},
];
