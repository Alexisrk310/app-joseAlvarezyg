import { MessageErrorType } from '@/components';
import { Values } from '@/models/interface/authValues';
import { auth } from '@/utilities/api/auth/auth';
import { ErrorMessage, Formik, FormikErrors } from 'formik';
import React, { useState } from 'react';
import './styles/LoginPage.css';

export interface LoginPageInterface {}

interface State {
	title?: 'Inicia sesion o crea una cuenta' | 'Iniciar sesión';
	stateLogin?: boolean;
	statepushAplication?: false;
	buttonSubmit?: 'Continuar con e-mail' | 'Iniciar sesión';
}

const LoginPage: React.FC<LoginPageInterface> = () => {
	const [state, setState] = useState<State>({
		title: 'Inicia sesion o crea una cuenta',
		stateLogin: false,
		statepushAplication: false,
		buttonSubmit: 'Continuar con e-mail',
	});

	const handleSubmit = async (value: Values) => {
		setState({
			...state,
			title: 'Iniciar sesión',
			stateLogin: true,
			buttonSubmit: 'Iniciar sesión',
		});
		if (state.stateLogin) {
			// AQUI VA LA API REST AUTH
			try {
				const dataResp = await auth('login', value);
				const resp = await dataResp.json();

				if (dataResp.status === 200) {
					localStorage.setItem('@user', resp);
				}
			} catch (error) {
				console.log(error);
			}
		}
	};

	const validations = (values: Values) => {
		let errors: FormikErrors<Values> = {};

		if (!values.email) {
			errors.email = 'Escribe tu correo';
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
		) {
			errors.email = '@example.com*';
		}
		console.log(errors);
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
				<div className="loginpage">
					<form className="container-form" onSubmit={handleSubmit}>
						<p className="text-center log-in">{state.title}</p>

						<div className="container-input">
							<div className="container-p-input">
								<p className="text-email">E-mail</p>
								<input
									className="form-control auth"
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
											className="form-control mt-2"
											type="text"
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
								<button className="btn btn-info w-100 mt-3" type="submit">
									{state && state.buttonSubmit}
								</button>
								<p className="text-center mt-5">O</p>
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
