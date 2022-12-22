import { Footer, Header, NavBar } from '@/components';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const LayoutPage = () => {
	return (
		<>
			<Header />
			<NavBar />
			<Outlet />
			<Footer />
		</>
	);
};
