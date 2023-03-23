import { auth } from '@/utilities/api/auth/auth';
import GoogleLogin from 'react-google-login';
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

	const onSucces = async (res: any) => {
		const id_token = {
			id_token: res.tokenId,
		};
		const local = localStorage.getItem(
			'oauth2_ss::http://localhost:5173::1::DEFAULT::_ss_'
		);

		try {
			const dataResp = await auth('loginGoogle', id_token);
			const resp = await dataResp.json();

			if (resp.ok) {
				localStorage.setItem('@user', JSON.stringify(resp));
				navigate('/restaurante/crear');
			}
		} catch (error) {
			throw error;
		}
	};
	const onFailure = (res: any) => {
		throw res;
	};

	const clientId =
		'640139910507-tcp9qrg1jbhupsmvr1i9rfmarmnb6n5s.apps.googleusercontent.com';
	return (
		<div className="justify-center" >
			<div className="grid grid-flow-row auto-rows-max" id="signInButton ">
				<GoogleLogin
					clientId={clientId}
					buttonText="Iniciar sesión con Google"
					onSuccess={onSucces}
					onFailure={onFailure}
					cookiePolicy={'single_host_origin'}
					isSignedIn={true}
					// prompt={c}
				/>
			</div>
		</div>
	);
};

export default AuthGoogle;
