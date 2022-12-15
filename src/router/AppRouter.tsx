import React, { Children } from 'react';
import { LayoutPage } from '@/layout/LayoutPage';
import {
	AboutPage,
	ContactUsPage,
	FoodTourPage,
	HomePage,
	LoginPage,
	NoFoundPage,
	PostedVideosPage,
	RegisterPage,
	RestaurantPage,
	TeamPage,
} from '@/pages';
import { InitialPage } from '@/pages/InitialPage';

import { createBrowserRouter, Route, Link } from 'react-router-dom';

export const AppRouter = createBrowserRouter([
	{
		path: '/',
		element: <LayoutPage />,
		errorElement: <NoFoundPage />,

		children: [
			{
				errorElement: <NoFoundPage />,

				children: [
					{
						index: true,
						element: <InitialPage />,
					},
					{
						path: '/home',
						element: <HomePage />,
					},
					{
						path: '/restaurante',
						element: <RestaurantPage />,
					},
					{
						path: '/ven',
						element: <AboutPage />,
					},
					{
						path: '/contactanos',
						element: <ContactUsPage />,
					},
					{
						path: '/tour',
						element: <FoodTourPage />,
					},
					{
						path: '/videos',
						element: <PostedVideosPage />,
					},
					{
						path: '/team',
						element: <TeamPage />,
					},
					{
						path: '/login',
						element: <LoginPage />,
					},
					{
						path: '/register',
						element: <RegisterPage />,
					},
				],
			},
		],
	},
]);
