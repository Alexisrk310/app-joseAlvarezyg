import { Card, Carrousel, ModalPlate } from '@/components';
import { responseGetRestaurant } from '@/models/interface';
import { getPlatesPopulate } from '@/utilities/api/plate/getPlates';
import { getRestaurantPopulate } from '@/utilities/api/resturant/getRestaurant';
import { Skeleton } from '@mui/material';

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './styles/HomePage.css';
export interface HomePageInterface {}

const HomePage: React.FC<HomePageInterface> = () => {
	const [restaurant, setRestaurant] = useState<any>([]);
	const [plates, setPlates] = useState<any>([]);
	const [plateModal, setplateModal] = useState({})

	const navigation = useNavigate();
	useEffect(() => {
		setRestaurant(JSON.parse(localStorage.getItem("restaurantsPopulates")|| "[]").data)
		setPlates(JSON.parse(localStorage.getItem("platesPopulate") || "[]").data)		
		// const initPlates = async () => {
		// 	try {
		// 		const respPlatePopulate = await getPlatesPopulate();
		// 		const dataPlatePopulate = await respPlatePopulate.json();

		// 		setPlates(dataPlatePopulate?.data);
		// 		console.log(plates);
		// 	} catch (error) {
		// 		throw error;
		// 	}
		// };

		// const initRestaurant = async () => {
		// 	try {
		// 		const data = await getRestaurantPopulate();
		// 		const resp = await data.json();

		// 		setRestaurant(resp?.data);
		// 	} catch (error) {
		// 		throw error;
		// 	}
		// };
		// // const initGetRatingPlates = async () => {
		// // 	const respRatingPlates = await getRatingPlates();
		// // 	const dataRatingPlates = await respRatingPlates.json();
		// // 	console.log(respRatingPlates);
		// // 	console.log(dataRatingPlates);
		// // };
		// // initGetRatingPlates();
		// initPlates();
		// initRestaurant();
	}, []);
	

	return (
		<div className="homepage">
			<div>
				<Carrousel />
			</div>
			<div className="mr-5 ml-5 mt-5 p-7">
				<div className="row">
					<h5 className="text-[#33D1CB] text-2xl font-[Inter] text-center">RESTAURANTES DE LA SEMANA</h5>
					{/* <p className="show-more pointer mt-3 col-12 col-md-6 text-right">
						MOSTRAR MAS
					</p> */}
				</div>
				<div className="mt-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{restaurant?.map((cardRestaurant: responseGetRestaurant | any) => (
						<Card
							img={cardRestaurant?.image}
							title={cardRestaurant?.name}
							description={cardRestaurant?.description}
							specialized={cardRestaurant?.specialty}
							stateStart={true}
							valueRating={Number(cardRestaurant?.rate)}
							disableRating={true}
							onChangee={false}
							isPlate={false}
							specializedState={true}
							evente={() => navigation(`/restaurante/${cardRestaurant.id}`)}
							key={cardRestaurant?.id}
						/>
					))}
				</div>

				{/* PLATILLOS */}

				<div className="row mt-10">
				<h5 className="text-[#33D1CB] text-2xl font-[Inter] text-center">PLATILLOS DE LA SEMANA</h5>
					{/* <p className=" mt-5 col-12 col-md-6">PLATILLOS DE LA SEMANA</p> */}
					{/* <p className="show-more pointer mt-3 col-12 col-md-6 text-right">
						MOSTRAR MAS
					</p> */}
				</div>
				<div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{plates?.slice(0, 4).map((plate: any) => (
						<Card
							img={plate?.image}
							title={plate?.name}
							eventeModal={() => setplateModal(plate)}
							description={plate?.description}
							specialized={plate?.specialized}
							stateStart={true}
							valueRating={Number(plate?.rate)}
							disableRating={true}
							onChangee={false}
							isPlate={true}
							evente={() => navigation(`/restaurante/${plate?.restaurantid}`)}
							key={plate?.id}
						/>
					))}
				</div>
				<ModalPlate restaurant={restaurant} data={plateModal} />

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
