import { AddPlate, Card, MessageErrorType } from '@/components';
import { useFormValues } from '@/hooks/useFormValues';
import { responseGetRestaurant, ValuesPlates } from '@/models/interface';
import { postPlates } from '@/utilities/api/plate/postPlates';
import { getRestaurant } from '@/utilities/api/resturant/getRestaurant';
import { addRestaurant } from '@/utilities/api/resturant/postRestaurant';
import { ErrorMessage, Formik, FormikErrors } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './styles/RestaurantPage.css';
export interface RestaurantPageInterface {}

const RestaurantPage: React.FC<RestaurantPageInterface> = () => {
	const [restaurant, setRestaurant] = useState([]);

	const local = JSON.parse(localStorage.getItem('@user') as any);
	const navigation = useNavigate();
	useEffect(() => {
		setRestaurant(JSON.parse(localStorage.getItem("restaurants") || "[]").data)
		// const init = async () => {
		// 	try {
		// 		const data = await getRestaurant();
		// 		const resp = await data.json();

		// 		setRestaurant(resp.data);
		// 	} catch (error) {
		// 		throw error;
		// 	}
		// };
		// init();
	}, []);

	return (
		<div className="restaurantpage">
			<div className="img-restaurant">
				<p>RESTAURANTES</p>
			</div>
			<div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{restaurant?.map((cardRestaurant: responseGetRestaurant | any) => (
					<Card
						img={cardRestaurant?.image}
						title={cardRestaurant?.name}
						description={cardRestaurant.description}
						specialized={cardRestaurant.specialty}
						key={cardRestaurant.id}
						isPlate={false}
						evente={() => {
							navigation(`/restaurante/${cardRestaurant.id}`)
						}}
						specializedState={true}
						// stateStart={true}
						// valueRating={parseInt(cardRestaurant?.promedio)}
						// disableRating={true}
					/>
				))}
			</div>
		</div>
	);
};

export default RestaurantPage;
