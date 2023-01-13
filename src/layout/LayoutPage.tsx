import { Footer, Header, Loader, NavBar } from '@/components';
import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';

export const LayoutPage = () => {
	const navigation = useNavigation();
	return (
		<>
			<Header />
			<NavBar />
			{navigation.state === 'loading' ? <Loader /> : <Outlet />}

			<Footer />
		</>
	);
};
