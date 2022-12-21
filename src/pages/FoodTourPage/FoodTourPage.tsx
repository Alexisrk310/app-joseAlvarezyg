import React from 'react';
import './styles/FoodTourPage.css';
export interface FoodTourPageInterface {}

const FoodTourPage: React.FC<FoodTourPageInterface> = () => {
	return (
		<div className="foodtourpage">
			<div className="tour-img-1"></div>
			<div className="tour-text">
				<p>Tour Gastronomico</p>
				<p>Soon cooming</p>
			</div>
			<div className="tour-img-2"></div>
		</div>
	);
};

export default FoodTourPage;
