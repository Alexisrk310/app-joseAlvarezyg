import { auth } from '@/utilities/api/auth/auth';
import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export interface AuthGoogleInterface {}

interface userI {
	name: string | null;
	lat?: number;
	iss?: string;
	picture?: string;
}

const AuthGoogle: React.FC<AuthGoogleInterface> = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState<userI>({ name: null });
	const handleCallbackResponse = (response: any) => {
		const authGoogle = async () => {
			const id_token = { id_token: response.credential };
			try {
				const dataResp = await auth('loginGoogle', id_token);
				const resp = await dataResp.json();
				console.log(resp);
				console.log(dataResp);

				if (resp.ok) {
					localStorage.setItem('@user', JSON.stringify(resp));
					navigate('/restaurante');
				}
			} catch (error) {
				console.log(error);
			}
		};
		authGoogle();
		document.getElementById('signInDiv')!.hidden = true;
	};
	const handleSignout = () => {
		setUser({ name: null });
		document.getElementById('signInDiv')!.hidden = false;
	};
	useEffect(() => {
		google.accounts!.id.initialize({
			client_id:
				'640139910507-tcp9qrg1jbhupsmvr1i9rfmarmnb6n5s.apps.googleusercontent.com',
			callback: handleCallbackResponse,
		});
		const docGetId = document.getElementById('signInDiv')!;

		google.accounts.id.renderButton(docGetId, {
			theme: 'outline',
			size: 'large',
			type: 'standard',
		});
		google.accounts.id.prompt();
	}, []);
	console.log(user);

	return (
		<div className="d-flex justify-content-center m-3">
			<div id="signInDiv"></div>
			{user && <img src={user.picture} />}
		</div>
	);
};

export default AuthGoogle;
