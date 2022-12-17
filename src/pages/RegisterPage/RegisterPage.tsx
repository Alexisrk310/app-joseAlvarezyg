import { MessageErrorType } from '@/components';
import { Values } from '@/models/interface/authValues';
import { ErrorMessage, Formik, FormikErrors } from 'formik';
import React, { useState } from 'react';
import './styles/RegisterPage.css';
export interface RegisterPageInterface {}

// interface State {
// 	title?: 'Inicia sesion o crea una cuenta' | 'Iniciar sesión';
// 	stateLogin?: boolean;
// 	statepushAplication?: false;
// 	buttonSubmit?: 'Continuar con e-mail' | 'Iniciar sesión';
// }

const RegisterPage: React.FC<RegisterPageInterface> = () => {
	// const [state, setState] = useState<State>({
	// 	title: 'Inicia sesion o crea una cuenta',
	// 	stateLogin: false,
	// 	statepushAplication: false,
	// 	buttonSubmit: 'Continuar con e-mail',
	// });

	const handleSubmit = (value: Values) => {
		// setState({
		// 	...state,
		// 	title: 'Iniciar sesión',
		// 	stateLogin: true,
		// 	buttonSubmit: 'Iniciar sesión',
		// });
		// if (state.stateLogin) {
		// 	// AQUI VA LA API REST AUTH
		// 	console.log('entro');
		// }
	};

	const validations = (values: Values) => {
		let errors: FormikErrors<Values> = {};
		if (!values.name) {
			errors.name = 'Escriba su nombre';
		}

		if (!values.email) {
			errors.email = 'Escribe tu correo';
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
		) {
			errors.email = '@example.com*';
		}

		if (!values.tel) {
			errors.name = 'Escriba su nombre';
		}

		if (!values.nameRestaurant) {
			errors.nameRestaurant = 'Escriba su restaurante';
		}
		if (!values.addressOne) {
			errors.addressOne = 'Escriba su direccion';
		}
		if (!values.addressTwo) {
			errors.addressTwo = 'C';
		}
		if (!values.addressThree) {
			errors.addressThree = 'M';
		}

		return errors;
	};

	return (
		<Formik
			initialValues={{
				name: '',
				email: '',
				tel: '',
				nameRestaurant: '',
				addressOne: '',
				addressTwo: '',
				addressThree: '',
			}}
			onSubmit={handleSubmit}
			validate={validations}>
			{({ handleBlur, handleChange, handleSubmit, values, errors }) => (
				<div className="loginpage">
					<form className="container-form" onSubmit={handleSubmit}>
						<p className="text-center log-in">Crear cuenta</p>

						<div className="container-input">
							<div className="container-p-input">
								<p className="text-email">Nombre</p>
								<input
									className="form-control auth"
									type="text"
									name="name"
									onBlur={handleBlur}
									onChange={handleChange}
									value={values.name}
								/>
								<ErrorMessage
									name="name"
									component={() => <MessageErrorType msg={errors.name} />}
								/>

								<p className="text-email">Correo electronico</p>
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
									component={() => <MessageErrorType msg={errors.password} />}
								/>

								<button className="btn btn-info w-100 mt-3" type="submit">
									Crear cuenta
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

export default RegisterPage;
