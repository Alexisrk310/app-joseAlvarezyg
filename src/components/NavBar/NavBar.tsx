import { ValuesLogin, ValuesRegister } from '@/models/interface';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import './styles/NavBar.css';
import Swal from 'sweetalert2';
export interface NavBarInterface {}

const NavBar: React.FC<NavBarInterface> = () => {
	const navigate = useNavigate();
	const handleToggle = () => {
		const bar = document.querySelector('.navbar');
		const toggle = document.querySelector('.container-navbar');
		toggle?.classList.toggle('responsive');
		bar?.classList.toggle('bar-toggle');
	};
	const handleSignOff = () => {
		Swal.fire({
			title: 'Estas seguro de cerrar sesión?',
			text: '',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Cerrar sesión',
			cancelButtonText: 'Cancelar',
		}).then((result) => {
			if (result.isConfirmed) {
				localStorage.removeItem('@user');
				navigate('/');
			}
		});
	};
	return (
		<div className="container-navbar sticky-top">
			<div className="navbar">
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
				{/* <NavLink
				to={'ven'}
				className={({ isActive }) =>
					isActive ? 'isActive pointer navbar-brand' : 'pointer navbar-brand'
				}>
				VEN TE ENSEÑO
				</NavLink> */}

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
				{!JSON.parse(localStorage.getItem('@user') as any) ? (
					<>
						<NavLink to={'login'} className="pointer btn btn-info">
							Inicia Sesión
						</NavLink>
						<NavLink to={'register'} className="pointer btn btn-info">
							Registrate
						</NavLink>
					</>
				) : (
					<button className="pointer btn btn-info" onClick={handleSignOff}>
						Cerrar sesión
					</button>
				)}
			</div>
			<i
				className="fa-solid fa-bars barJose pointer"
				onClick={handleToggle}></i>
		</div>
	);
};

export default NavBar;
