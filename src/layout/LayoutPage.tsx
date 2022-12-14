import { Header, NavBar } from '@/components';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const LayoutPage = () => {
	console.log(Outlet);

	return (
		<>
			<Header />
			<NavBar />
			<Outlet />
			{/* <h3>Footer</h3> */}
		</>
	);
};
