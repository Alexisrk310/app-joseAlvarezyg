import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/NavBar.css';
export interface NavBarInterface {}

const NavBar: React.FC<NavBarInterface> = () => {
	return (
		<div className="navbar sticky-top">
			<NavLink
				to={'/'}
				className={({ isActive }) =>
					isActive ? 'isActive pointer navbar-brand' : 'pointer navbar-brand'
				}>
				HOME
			</NavLink>
			<NavLink
				to={'restaurante'}
				className={({ isActive }) =>
					isActive ? 'isActive pointer navbar-brand' : 'pointer navbar-brand'
				}>
				RESTAURANTES
			</NavLink>
			<NavLink
				to={'ven'}
				className={({ isActive }) =>
					isActive ? 'isActive pointer navbar-brand' : 'pointer navbar-brand'
				}>
				VEN TE ENSEÑO
			</NavLink>

			<NavLink
				to={'tour'}
				className={({ isActive }) =>
					isActive ? 'isActive pointer navbar-brand' : 'pointer navbar-brand'
				}>
				TOUR GASTRONOMICO
			</NavLink>
			<NavLink
				to={'videos'}
				className={({ isActive }) =>
					isActive ? 'isActive pointer navbar-brand' : 'pointer navbar-brand'
				}>
				VIDEOS PUBLICADOS
			</NavLink>
			<NavLink
				to={'team'}
				className={({ isActive }) =>
					isActive ? 'isActive pointer navbar-brand' : 'pointer navbar-brand'
				}>
				TEAM JOSE ALVAREZ
			</NavLink>
			<NavLink
				to={'contactanos'}
				className={({ isActive }) =>
					isActive ? 'isActive pointer navbar-brand' : 'pointer navbar-brand'
				}>
				CONTACTANOS
			</NavLink>
			<i className="fa-solid fa-magnifying-glass pointer white"></i>
			<NavLink to={'login'} className="pointer btn btn-info">
				Inicia Sesión
			</NavLink>
			<NavLink to={'register'} className="pointer btn btn-info">
				Registrate
			</NavLink>
		</div>
	);
};

export default NavBar;
