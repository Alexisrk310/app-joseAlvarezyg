import { MessageErrorType } from '@/components';
import { Values } from '@/models/interface/authValues';
import { ErrorMessage, Formik, FormikErrors } from 'formik';
import React, { useState } from 'react';
import './styles/LoginPage.css';

export interface LoginPageInterface {}

const LoginPage: React.FC<LoginPageInterface> = () => {
	const [stateLogin, setStateLogin] = useState(false);
	const handleSubmit = (value: Values) => {
		console.log(value);
	};

	const validations = (values: Values) => {
		let errors: FormikErrors<Values> = {};
		const xd = () => {
			if (!values.password) {
				errors.password = 'Escribe tu contraseña';
			}
		};
		if (!values.email) {
			errors.email = 'Escribe tu correo';
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
		) {
			errors.email = '@example.com*';
		}
		console.log(errors);
		if (!errors) {
			if (!values.password) {
				xd();
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
						{stateLogin ? (
							<p className="text-center log-in">Inicia sesión</p>
						) : (
							<p className="text-center log-in">
								Inicia sesion o crea una cuenta
							</p>
						)}

						<div className="container-input">
							<div className="container-p-input">
								<p className="text-email">E-mail</p>
								<input
									className="form-control"
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
								{stateLogin ? (
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
								<button
									className="btn btn-info w-100 mt-3"
									type="submit"
									onClick={() => setStateLogin(!true)}>
									Continuar con e-mail
								</button>
								<p className="text-center mt-5">O</p>
							</div>
						</div>
					</form>
				</div>
			)}
		</Formik>
	);
};

export default LoginPage;
