import React from 'react';
import './styles/FoodTourPage.css';
export interface FoodTourPageInterface {}

const FoodTourPage: React.FC<FoodTourPageInterface> = () => {
	return (
		<div className="foodtourpage">
			<p className='tour'>Tour gastronomico</p>
			<p className='soon'>Soon coming</p>
		</div>
	);
};

export default FoodTourPage;
