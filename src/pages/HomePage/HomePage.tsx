import React from 'react';
import './styles/HomePage.css';
export interface HomePageInterface {}

const HomePage: React.FC<HomePageInterface> = () => {
	return (
		<div className='homepage'>Homepage</div>
	);
};

export default HomePage;
