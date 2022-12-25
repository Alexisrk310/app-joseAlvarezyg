import { Card } from '@/components';
import { getPlatesId } from '@/utilities/api/plate/getPlates';
import {
	getRestaurantiD,
	getRestaurant,
} from '@/utilities/api/resturant/getRestaurant';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useRouteLoaderData } from 'react-router-dom';
import './styles/NameRestaurant.css';
export interface NameRestaurantInterface {}

interface responseGetRestaurant {
	id: string;
	name: string;
	description: string;
	specialty: string;
	userId: string;
}
const NameRestaurant: React.FC<NameRestaurantInterface> = () => {
	const [plate, setPlate] = useState([]);
	const { dataRestaurantId }: any = useLoaderData();
	const { data } = dataRestaurantId;
	console.log(data);
	useEffect(() => {
		const init = async () => {
			const local = JSON.parse(localStorage.getItem('@user') as any);
			try {
				const responsePlatesId = await getPlatesId(
					local.token || local?.id_token,
					data.id
				);
				const dataPlatesId = await responsePlatesId.json();
				console.log(responsePlatesId);
				console.log(dataPlatesId);

				if (dataPlatesId.ok) {
					setPlate(dataPlatesId.data);
				}
			} catch (error) {
				console.log(error);
			}
		};
		init();
	}, []);

	const tel = 3008277052;
	return (
		<div className="namerestaurant ">
			<div className="content-restaurant ">
				<img src={data.image} alt="logo" className="banner-img" />
				<div className="d-flex ">
					<img src={data.image} alt="logo" className="logo-restaurant" />

					<div className="m-5 title-name-restaurant ">
						<b className="white">{data.name}</b>
						<p className="white">{data.description}</p>
					</div>
				</div>
				<p className="qualification">Calificanos: Estrellas</p>
			</div>
			<div className="container-menu-items mr-2 ml-2 ">
				<h3 className="text-center white">PLATILLOS</h3>
				<div className="menu-items mr-5 ml-5">
					{plate?.map((plates: any) => (
						<Card
							img={plates?.image}
							title={plates.name}
							description={plates.description}
						/>
					))}

					<hr className="mb-0" />
				</div>
			</div>
			<i
				className="fa-brands fa-whatsapp whatsapp-atention pointer"
				onClick={() => {
					window.open(`https://api.whatsapp.com/send/?phone=57${tel}`);
				}}></i>
		</div>
	);
};

export default NameRestaurant;

export const loaderPostRestaurant = async ({ params }: any) => {
	const local = JSON.parse(localStorage.getItem('@user') as any);
	const respRestaurantId = await getRestaurantiD(
		params.id,
		local.token || local?.id_token
	);
	const dataRestaurantId = await respRestaurantId.json();
	console.log(params.id);

	return { dataRestaurantId };
};
