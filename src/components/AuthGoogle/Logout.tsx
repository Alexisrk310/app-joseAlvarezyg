import React, { MouseEventHandler } from 'react';
import { GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

interface Logout {
	event: MouseEventHandler<HTMLDivElement>;
}

const Logout: React.FC<Logout> = () => {
	const navigate = useNavigate();
	const onSucces = () => {
		// console.log('Log out successfull');
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
		navigate('restaurante');
	};
	const clientId =
		'640139910507-tcp9qrg1jbhupsmvr1i9rfmarmnb6n5s.apps.googleusercontent.com';
	return (
		<div className="signOutButton">
			<GoogleLogout
				clientId={clientId}
				buttonText={'Cerrar sesión'}
				onLogoutSuccess={onSucces}
			/>
		</div>
	);
};
export default Logout;
