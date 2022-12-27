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
		const init = async () => {
			const data = await getRestaurant();
			const resp = await data.json();
			console.log(data);
			console.log(resp);
			setRestaurant(resp.data.data);
		};
		init();
	}, []);

	return (
		<div className="restaurantpage">
			<div className="img-restaurant">
				<p>RESTAURANTES</p>
			</div>
			<div className="mr-5 ml-5 mt-5 restaurant-card">
				{restaurant?.map((cardRestaurant: responseGetRestaurant) => (
					<Card
						img={cardRestaurant?.image}
						title={cardRestaurant?.name}
						description={cardRestaurant.description}
						specialized={cardRestaurant.specialty}
						key={cardRestaurant.id}
						// stateStart={true}
						evente={() =>
							!local?.token || !local?.data?.token
								? navigation(`/restaurante/${cardRestaurant.id}`)
								: undefined
						}
						stateStart={true}
						valueRating={cardRestaurant.rate}
						disableRating={true}
						onChangee={false}
					/>
				))}
			</div>
		</div>
	);
};

export default RestaurantPage;
