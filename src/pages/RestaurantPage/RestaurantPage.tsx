import { Card } from '@/components';
import React from 'react';
import './styles/RestaurantPage.css';
export interface RestaurantPageInterface {}

const RestaurantPage: React.FC<RestaurantPageInterface> = () => {
	return (
		<div className="restaurantpage">
			<div className="img-restaurant">
				<p>RESTAURANTES</p>
			</div>
			<div className="mr-5 ml-5 mt-5 restaurant-card">
				<Card
					img="https://s3images.coroflot.com/user_files/individual_files/547169_igfq9rhfz2gkzmgy7sujtv75f.jpg"
					title="AMALA"
					description="Lorem ipsum con papas"
					specialized="Hamburguesa"
				/>
			</div>
		</div>
	);
};

export default RestaurantPage;
