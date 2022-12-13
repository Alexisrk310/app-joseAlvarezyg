import { LayoutPage } from '@/layout/LayoutPage';
import {
	AboutPage,
	FoodTourPage,
	HomePage,
	LoginPage,
	NoFoundPage,
	PostedVideosPage,
	RegisterPage,
	RestaurantPage,
	ServicesPage,
	TeamPage,
} from '@/pages';
import { InitialPage } from '@/pages/InitialPage';

import React from 'react';
import { createBrowserRouter, Route, Link } from 'react-router-dom';
export const AppRouter = createBrowserRouter([
	{
		path: '/',
		element: <LayoutPage />,
		errorElement: <NoFoundPage />,
		children: [
			{
				path: '/',
				element: <InitialPage />,
			},
			{
				path: 'home',
				element: <HomePage />,
			},
			{
				path: 'restaurante',
				element: <RestaurantPage />,
			},
			{
				path: 'ven',
				element: <AboutPage />,
			},
			{
				path: 'servicios',
				element: <ServicesPage />,
			},
			{
				path: 'tour',
				element: <FoodTourPage />,
			},
			{
				path: 'videos',
				element: <PostedVideosPage />,
			},
			{
				path: 'team',
				element: <TeamPage />,
			},
			{
				path: 'login',
				element: <LoginPage />,
			},
			{
				path: 'register',
				element: <RegisterPage />,
			},
		],
	},
]);
