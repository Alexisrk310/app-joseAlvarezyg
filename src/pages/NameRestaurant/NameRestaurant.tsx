import { Card } from '@/components';
import React from 'react';
import './styles/NameRestaurant.css';
export interface NameRestaurantInterface {}

const NameRestaurant: React.FC<NameRestaurantInterface> = () => {
	const tel = 3008277052;
	return (
		<div className="namerestaurant ">
			<div className="content-restaurant ">
				<img
					src="https://s3images.coroflot.com/user_files/individual_files/547169_igfq9rhfz2gkzmgy7sujtv75f.jpg"
					alt="logo"
					className="banner-img"
				/>
				<div className="d-flex ">
					<img
						src="https://s3images.coroflot.com/user_files/individual_files/547169_igfq9rhfz2gkzmgy7sujtv75f.jpg"
						alt="logo"
						className="logo-restaurant"
					/>

					<div className="m-5 title-name-restaurant ">
						<p className="white">NOMBRE DEL RESTAURANTE</p>
						<p className="white">
							Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
							ipsum Lorem ipsum
						</p>
					</div>
				</div>
				<p className="qualification">Calificanos: Estrellas</p>
			</div>
			<div className="container-menu-items mr-2 ml-2 ">
				<h3 className="text-center white">PLATILLOS</h3>
				<div className="menu-items mr-5 ml-5">
					<Card
						img="https://static.wixstatic.com/media/54489f_6df5a3cb035d4542960a78e20b90e624~mv2_d_1500_1313_s_2.png/v1/fit/w_2500,h_1330,al_c/54489f_6df5a3cb035d4542960a78e20b90e624~mv2_d_1500_1313_s_2.png"
						title="Restaurante"
						description="Lorem ipsum Lorem ipsum Lorem ipsum"
						specialized="Pizza"
					/>
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
