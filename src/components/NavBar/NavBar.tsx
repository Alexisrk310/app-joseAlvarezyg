import React from 'react';
import './styles/NavBar.css';
export interface NavBarInterface {}

const NavBar: React.FC<NavBarInterface> = () => {
	return (
		<div className="navbar">
			<p>HOME</p>
			<p>RESTAURANTES</p>
			<p>VEN TE ENSEÑO</p>
			<p>SERVICIOS</p>
			<p>TOUR GASTRONOMICO</p>
			<p>VIDEOS PUBLICADOS</p>
			<p>TEAM JOSE ALVAREZ</p>
			<p>INICIA SESION/REGISTRATE</p>
		</div>
	);
};

export default NavBar;
