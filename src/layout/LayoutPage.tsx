import { NavBar } from '@/components';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const LayoutPage = () => {
	return (
		<>
			<Outlet />
			<NavBar />
			{/* <h3>Footer</h3> */}
		</>
	);
};
