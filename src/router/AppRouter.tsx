import React, { Children } from 'react';
import { LayoutPage } from '@/layout/LayoutPage';
import {
	AboutPage,
	ContactUsPage,
	CreateRestaurant,
	FoodTourPage,
	HomePage,
	LoginPage,
	NameRestaurant,
	NoFoundPage,
	PostedVideosPage,
	RegisterPage,
	RestaurantPage,
	TeamPage,
} from '@/pages';

import { createBrowserRouter } from 'react-router-dom';
import { loaderPostRestaurant } from '@/pages/NameRestaurant/NameRestaurant';

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
						element: <HomePage />,
					},

					{
						path: '/restaurante',
						element: <RestaurantPage />,
					},
					{
						path: '/restaurante/:id',
						element: <NameRestaurant />,
						loader: loaderPostRestaurant,
					},
					{
						path: '/restaurante/crear',
						element: <CreateRestaurant />,
					},
					// {
					// 	path: '/ven',
					// 	element: <AboutPage />,
					// },
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
