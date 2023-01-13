import { Card } from '@/components';
import { responseGetRestaurant } from '@/models/interface';
import { getPlatesPopulate } from '@/utilities/api/plate/getPlates';
import { getRestaurantPopulate } from '@/utilities/api/resturant/getRestaurant';
import { Skeleton } from '@mui/material';

import React, { useEffect, useState } from 'react';

import './styles/HomePage.css';
export interface HomePageInterface {}

const HomePage: React.FC<HomePageInterface> = () => {
	const [restaurant, setRestaurant] = useState([]);
	const [plates, setPlates] = useState([]);

	useEffect(() => {
		const initPlates = async () => {
			try {
				const respPlatePopulate = await getPlatesPopulate();
				const dataPlatePopulate = await respPlatePopulate.json();

				setPlates(dataPlatePopulate?.data);
			} catch (error) {
				throw error;
			}
		};

		const initRestaurant = async () => {
			try {
				const data = await getRestaurantPopulate();
				const resp = await data.json();

				setRestaurant(resp?.data);
			} catch (error) {
				throw error;
			}
		};
		// const initGetRatingPlates = async () => {
		// 	const respRatingPlates = await getRatingPlates();
		// 	const dataRatingPlates = await respRatingPlates.json();
		// 	console.log(respRatingPlates);
		// 	console.log(dataRatingPlates);
		// };
		// initGetRatingPlates();
		initPlates();
		initRestaurant();
	}, []);

	return (
		<div className="homepage">
			<div className="mr-5 ml-5">
				<div className="row">
					<p className=" mt-3 col-12 col-md-6">RESTAURANTES DE LA SEMANA</p>
					{/* <p className="show-more pointer mt-3 col-12 col-md-6 text-right">
						MOSTRAR MAS
					</p> */}
				</div>
				<div className="d-flex contain-card">
					{restaurant?.map((cardRestaurant: responseGetRestaurant | any) => (
						<Card
							img={cardRestaurant?.image}
							title={cardRestaurant?.name}
							description={cardRestaurant?.description}
							specialized={cardRestaurant?.specialty}
							stateStart={true}
							valueRating={parseInt(cardRestaurant?.promedio)}
							disableRating={true}
							onChangee={false}
							specializedState={true}
							key={cardRestaurant?.id}
						/>
					))}
				</div>

				{/* PLATILLOS */}

				<div className="row">
					<p className=" mt-3 col-12 col-md-6">PLATILLOS DE LA SEMANA</p>
					{/* <p className="show-more pointer mt-3 col-12 col-md-6 text-right">
						MOSTRAR MAS
					</p> */}
				</div>
				<div className="d-flex contain-card">
					{plates?.map((plate: any) => (
						<Card
							img={plate?.image}
							title={plate?.name}
							description={plate?.description}
							specialized={plate?.specialized}
							stateStart={true}
							valueRating={parseInt(plate?.promedio)}
							disableRating={true}
							onChangee={false}
							key={plate?.id}
						/>
					))}
				</div>
				{/* <div className="mt-3 row">
					<p className="col-12 col-md-6 ">TOP 10 DE COLOMBIA</p>
					<p className="pointer col-12 col-md-6 text-right">MOSTRAR MAS</p>
				</div>
				<div className="d-flex contain-card">
					<Card
						img={
							'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-aa429d1533d621aa16a4c85bb4c8faaa_screen.jpg?ts=1597915301'
						}
						title={'Restaurante'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac ultrices lacus, non imperdiet libero'
						}
						specialized={'Pizza'}
						zone={'Cartagena'}
					/>
					<Card
						img={
							'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-aa429d1533d621aa16a4c85bb4c8faaa_screen.jpg?ts=1597915301'
						}
						title={'Restaurante'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac ultrices lacus, non imperdiet libero'
						}
						specialized={'Pizza'}
						zone={'Cartagena'}
					/>
					<Card
						img={
							'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-aa429d1533d621aa16a4c85bb4c8faaa_screen.jpg?ts=1597915301'
						}
						title={'Restaurante'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac ultrices lacus, non imperdiet libero'
						}
						specialized={'Pizza'}
						zone={'Cartagena'}
					/>
					<Card
						img={
							'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-aa429d1533d621aa16a4c85bb4c8faaa_screen.jpg?ts=1597915301'
						}
						title={'Restaurante'}
						description={
							'Lorem elit. Suspendisse ac ultrices lacus, non imperdiet libero'
						}
						specialized={'Pizza'}
						zone={'Cartagena'}
					/>
					<Card
						img={
							'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-aa429d1533d621aa16a4c85bb4c8faaa_screen.jpg?ts=1597915301'
						}
						title={'Restaurante'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac ultrices lacus, non imperdiet libero'
						}
						specialized={'Pizza'}
						zone={'Cartagena'}
					/>
				</div> */}
				{/* <div className="mt-3 row">
					<p className="col-12 col-md-6">TOP 10 DE CARTAGENA</p>
					<p className="pointer col-12 col-md-6 text-right">MOSTRAR MAS</p>
				</div>
				<div className="d-flex contain-card">
					<Card
						img={
							'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-aa429d1533d621aa16a4c85bb4c8faaa_screen.jpg?ts=1597915301'
						}
						title={'Restaurante'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac ultrices lacus, non imperdiet libero'
						}
						specialized={'Pizza'}
						zone={'Cartagena'}
					/>
					<Card
						img={
							'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-aa429d1533d621aa16a4c85bb4c8faaa_screen.jpg?ts=1597915301'
						}
						title={'Restaurante'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac ultrices lacus, non imperdiet libero'
						}
						specialized={'Pizza'}
						zone={'Cartagena'}
					/>
					<Card
						img={
							'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-aa429d1533d621aa16a4c85bb4c8faaa_screen.jpg?ts=1597915301'
						}
						title={'Restaurante'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac ultrices lacus, non imperdiet libero'
						}
						specialized={'Pizza'}
						zone={'Cartagena'}
					/>
					<Card
						img={
							'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-aa429d1533d621aa16a4c85bb4c8faaa_screen.jpg?ts=1597915301'
						}
						title={'Restaurante'}
						description={
							'Lorem elit. Suspendisse ac ultrices lacus, non imperdiet libero'
						}
						specialized={'Pizza'}
						zone={'Cartagena'}
					/>
					<Card
						img={
							'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-aa429d1533d621aa16a4c85bb4c8faaa_screen.jpg?ts=1597915301'
						}
						title={'Restaurante'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac ultrices lacus, non imperdiet libero'
						}
						specialized={'Pizza'}
						zone={'Cartagena'}
					/>
				</div> */}

				{/* SOÑADORES QUE INSPIRAN */}

				{/* <h3 className="text-center m-5">SOÑADORES QUE INSPIRAN</h3>

				<div className="grid">
					<div className="sidebar">
						<iframe
							className="sidebar"
							height="100%"
							width="100%"
							src="https://www.youtube.com/embed/D2FyHvooV2M"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							title="YouTube video player"
							frameBorder={0}></iframe>
					</div>
					<div className="video1">
						<iframe
							height="100%"
							width="100%"
							src="https://www.youtube.com/embed/W89RNHYE_VM"
							title="YouTube video player"
							frameBorder={0}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen></iframe>
					</div>
					<div className="video2">
						<iframe
							height="100%"
							width="100%"
							src="https://www.youtube.com/embed/BKC4R8xDrmA"
							title="YouTube video player"
							frameBorder={0}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen></iframe>
					</div>
					<div className="video3">
						<iframe
							height="100%"
							width="100%"
							src="https://www.youtube.com/embed/OvU3rVuLoBo"
							title="YouTube video player"
							frameBorder={0}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen></iframe>
					</div>
					<div className="video4">
						<iframe
							height="100%"
							width="100%"
							src="https://www.youtube.com/embed/4gNshItEoQE"
							title="YouTube video player"
							frameBorder={0}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen></iframe>
					</div>
					<div className="video5">
						<iframe
							height="100%"
							width="100%"
							src="https://www.youtube.com/embed/_mwXjj8iH7w?start=3"
							title="YouTube video player"
							frameBorder={0}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen></iframe>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default HomePage;
