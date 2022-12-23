import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
export interface AuthGoogleInterface {}

interface userI {
	name: string | null;
	lat?: number;
	iss?: string;
	picture?: string;
}

const AuthGoogle: React.FC<AuthGoogleInterface> = () => {
	const [user, setUser] = useState<userI>({ name: null });
	const handleCallbackResponse = (response: any) => {
		const userObject = jwtDecode(response.credential);
		setUser(userObject as userI);
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
	return (
		<div className="d-flex justify-content-center m-3">
			<div id="signInDiv"></div>
			{user && <img src={user.picture} />}
		</div>
	);
};

export default AuthGoogle;
