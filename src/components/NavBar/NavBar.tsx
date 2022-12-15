import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NavBar.css';
export interface NavBarInterface {}

const NavBar: React.FC<NavBarInterface> = () => {
	return (
		<div className="navbar sticky-top">
			<Link to={'home'} className="pointer">
				HOME
			</Link>
			<Link to={'restaurante'} className="pointer">
				RESTAURANTES
			</Link>
			<Link to={'ven'} className="pointer">
				VEN TE ENSEÑO
			</Link>

			<Link to={'tour'} className="pointer">
				TOUR GASTRONOMICO
			</Link>
			<Link to={'videos'} className="pointer">
				VIDEOS PUBLICADOS
			</Link>
			<Link to={'team'} className="pointer">
				TEAM JOSE ALVAREZ
			</Link>
			<Link to={'contactanos'} className="pointer">
				CONTACTANOS
			</Link>
			<Link to={'login'} className="pointer">
				INICIA SESION/REGISTRATE
			</Link>
		</div>
	);
};

export default NavBar;
