import { MessageErrorType, LoaderAuth } from '@/components';
import { AuthGoogle } from '@/components/AuthGoogle';
import { ValuesLogin } from '@/models/interface/authValues';
import { auth } from '@/utilities/api/auth/auth';
import { ErrorMessage, Formik, FormikErrors } from 'formik';
import React, { useEffect, useState } from 'react';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import './styles/LoginPage.css';
import { useNavigate } from 'react-router-dom';
import { gapi } from 'gapi-script';

export interface LoginPageInterface {}

interface State {
	title?: 'Inicia sesion o crea una cuenta' | 'Iniciar sesión';
	stateLogin?: boolean;
	statepushAplication?: false;
	buttonSubmit?: 'Continuar con e-mail' | 'Iniciar sesión' | '';
}

const LoginPage: React.FC<LoginPageInterface> = () => {
	const clientId =
		'640139910507-tcp9qrg1jbhupsmvr1i9rfmarmnb6n5s.apps.googleusercontent.com';
	const MySwal = withReactContent(Swal);
	const navigate = useNavigate();
	const [state, setState] = useState<State>({
		title: 'Inicia sesion o crea una cuenta',
		stateLogin: false,
		statepushAplication: false,
		buttonSubmit: 'Continuar con e-mail',
	});

	useEffect(() => {
		function start() {
			gapi.client.init({
				clientId: clientId,
				scope: '',
			});
		}
		gapi.load('client:auth2', start);
	}, []);

	const handleSubmit = async (value: ValuesLogin) => {
		setState({
			...state,
			title: 'Iniciar sesión',
			stateLogin: true,
			buttonSubmit: 'Iniciar sesión',
		});
		if (state.stateLogin) {
			setState({
				...state,
				buttonSubmit: '',
			});
			// AQUI VA LA API REST AUTH
			try {
				const dataResp = await auth('login', value);
				const resp = await dataResp.json();
				setState({
					...state,
					buttonSubmit: 'Iniciar sesión',
				});
				if (resp.ok) {
					localStorage.setItem('@user', JSON.stringify(resp.data || resp));

					navigate('/restaurante/crear');
				} else {
					setState({
						...state,
						buttonSubmit: 'Iniciar sesión',
					});
					MySwal.fire({
						icon: 'error',
						title: 'Error',
						text: 'Esta cuenta no existe',
					});
				}
			} catch (error) {
				throw error;
			}
		}
	};

	const validations = (values: ValuesLogin) => {
		let errors: FormikErrors<ValuesLogin> = {};
		if (!values.email) {
			errors.email = 'Escribe tu correo';
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
		) {
			errors.email = '@example.com*';
		}
		if (state.stateLogin) {
			if (!values.password) {
				errors.password = 'Escribe tu contraseña';
			}
		}
		return errors;
	};

	return (
		<Formik
			initialValues={{ email: '', password: '' }}
			onSubmit={handleSubmit}
			validate={validations}>
			{({ handleBlur, handleChange, handleSubmit, values, errors }) => (
				<div className="loginpage ">
					<form className="container-form flex flex-col gap-3" onSubmit={handleSubmit}>
						<p className="text-center log-in text-2xl font-bold text-black">{state.title}</p>

						<div className="container-input ">
							<div className="container-p-input uppercase tracking-wide text-gray-700 text-xs font-bold mb-2  flex flex-col gap-3">
								<p className="text-email">E-mail</p>
								<input
									className="form-control auth appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									type="text"
									name="email"
									onBlur={handleBlur}
									onChange={handleChange}
									value={values.email}
								/>
								<ErrorMessage
									name="email"
									component={() => <MessageErrorType msg={errors.email} />}
								/>
								{state.stateLogin ? (
									<>
										<p className="text-email">Contraseña</p>
										<input
											className="form-control mt-2 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
											type="password"
											name="password"
											onBlur={handleBlur}
											onChange={handleChange}
											value={values.password}
										/>
										<ErrorMessage
											name="password"
											component={() => (
												<MessageErrorType msg={errors.password} />
											)}
										/>
									</>
								) : undefined}

								<button
									className=" bg-[#33D1CB] text-white py-2 px-4 rounded-md hover:bg-[#23B2AC] "
									type="submit">
									{state.buttonSubmit}
									{state.buttonSubmit === '' && <LoaderAuth />}
								</button>
								<p className="text-center mt-5">O</p>
								<AuthGoogle />
								<p className="text-center">
									Al iniciar sesion o crear una cuenta esta aceptando nuestros
									<b className="text-info"> terminos y condiciones</b> y
									<b className="text-info"> politica de privacidad</b>
								</p>
							</div>
						</div>
					</form>
				</div>
			)}
		</Formik>
	);
};

export default LoginPage;
