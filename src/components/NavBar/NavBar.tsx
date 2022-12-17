import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/NavBar.css';
export interface NavBarInterface {}

const NavBar: React.FC<NavBarInterface> = () => {
	return (
		<div className="navbar sticky-top">
			<NavLink
				to={'home'}
				className={({ isActive }) =>
					isActive ? 'isActive pointer' : 'pointer'
				}>
				HOME
			</NavLink>
			<NavLink
				to={'restaurante'}
				className={({ isActive }) =>
					isActive ? 'isActive pointer' : 'pointer'
				}>
				RESTAURANTES
			</NavLink>
			<NavLink
				to={'ven'}
				className={({ isActive }) =>
					isActive ? 'isActive pointer' : 'pointer'
				}>
				VEN TE ENSEÑO
			</NavLink>

			<NavLink
				to={'tour'}
				className={({ isActive }) =>
					isActive ? 'isActive pointer' : 'pointer'
				}>
				TOUR GASTRONOMICO
			</NavLink>
			<NavLink
				to={'videos'}
				className={({ isActive }) =>
					isActive ? 'isActive pointer' : 'pointer'
				}>
				VIDEOS PUBLICADOS
			</NavLink>
			<NavLink
				to={'team'}
				className={({ isActive }) =>
					isActive ? 'isActive pointer' : 'pointer'
				}>
				TEAM JOSE ALVAREZ
			</NavLink>
			<NavLink
				to={'contactanos'}
				className={({ isActive }) =>
					isActive ? 'isActive pointer' : 'pointer'
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
