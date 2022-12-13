import { Formik } from 'formik';
import React from 'react';
import './styles/LoginPage.css';
export interface LoginPageInterface {}

const LoginPage: React.FC<LoginPageInterface> = () => {
	const handleSubmit = () => {};
	return (
		<Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
			<div className="loginpage">
				<form className="container-form">
					<p className="text-center log-in">Inicia sesion o crea una cuenta</p>
					<div className="container-input">
						<div className="container-p-input">
							<p className="text-email">E-mail</p>
							<input className="form-control" type="text" />
							<button className="btn btn-info w-100 mt-3">
								Continuar con e-mail
							</button>
							<p className="text-center mt-5">O</p>
						</div>
					</div>
				</form>
			</div>
		</Formik>
	);
};

export default LoginPage;
