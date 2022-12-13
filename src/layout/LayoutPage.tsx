import { NavBar } from '@/components';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const LayoutPage = () => {
	console.log(Outlet);

	return (
		<>
			<div className="header-img d-flex">
				<img
					src="https://www.luisan.net/blog/wp-content/uploads/2014/09/color_small_mk-e1549454603143.png"
					alt="img"
				/>
				<img
					src="https://www.luisan.net/blog/wp-content/uploads/2014/09/color_small_mk-e1549454603143.png"
					alt="img"
				/>
				<img
					src="https://www.luisan.net/blog/wp-content/uploads/2014/09/color_small_mk-e1549454603143.png"
					alt="img"
				/>
				<img
					src="https://www.luisan.net/blog/wp-content/uploads/2014/09/color_small_mk-e1549454603143.png"
					alt="img"
				/>
				<img
					src="https://www.luisan.net/blog/wp-content/uploads/2014/09/color_small_mk-e1549454603143.png"
					alt="img"
				/>
				<img
					src="https://www.luisan.net/blog/wp-content/uploads/2014/09/color_small_mk-e1549454603143.png"
					alt="img"
				/>
				<img
					src="https://www.luisan.net/blog/wp-content/uploads/2014/09/color_small_mk-e1549454603143.png"
					alt="img"
				/>
				<img
					src="https://www.luisan.net/blog/wp-content/uploads/2014/09/color_small_mk-e1549454603143.png"
					alt="img"
				/>
				<img
					src="https://www.luisan.net/blog/wp-content/uploads/2014/09/color_small_mk-e1549454603143.png"
					alt="img"
				/>
			</div>
			<NavBar />
			<Outlet />
			{/* <h3>Footer</h3> */}
		</>
	);
};
