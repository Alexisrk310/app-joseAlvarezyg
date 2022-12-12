import { LayoutPage } from '@/layout/LayoutPage';
import { HomePage, Login, NoFound, Register } from '@/pages';

import React from 'react';
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link,
} from 'react-router-dom';
export const AppRouter = createBrowserRouter([
	{
		path: '/',
		element: <LayoutPage />,
		errorElement: <NoFound />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'register',
				element: <Register />,
			},
		],
	},
]);
