import { MessageErrorType } from '@/components';
import { ValuesRegister } from '@/models/interface/authValues';
import { auth } from '@/utilities/api/auth/auth';
import { ErrorMessage, Formik, FormikErrors } from 'formik';
import React from 'react';
import './styles/RegisterPage.css';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { AuthGoogle } from '@/components/AuthGoogle';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';

export interface RegisterPageInterface {}

const RegisterPage: React.FC<RegisterPageInterface> = () => {
	const navigate = useNavigate();
	const authState = useSelector((state: RootState) => state.auth);
	console.log(authState);

	const handleSubmit = async (value: ValuesRegister) => {
		// console.log(value);
		console.log(value);

		try {
			const dataResp = await auth('register', value);
			const resp = await dataResp.json();
			console.log(dataResp);
			console.log(resp);
			const MySwal = withReactContent(Swal);
			console.log(resp);

			if (dataResp.status == 200 || dataResp.status == 201) {
				localStorage.setItem(
					'@user',
					JSON.stringify(resp.data || resp.payload)
				);
				navigate('/restaurante/crear');
			} else {
				MySwal.fire({
					icon: 'error',
					title: 'Error',
					text: 'No se pudo crear tu cuenta',
				});
			}
		} catch (error) {
			console.log(error);
		}
	};

	const validations = (values: ValuesRegister) => {
		let errors: FormikErrors<ValuesRegister> = {};
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
		if (!values.password) {
			errors.password = 'Escriba su contraseña';
		}
		if (!values.tel) {
			errors.tel = 'Escriba su telefono';
		} else if (!/^\d{10}$/.test(values.tel)) {
			errors.tel = 'Solo se permiten 10 digitos';
		}

		if (!values.addressOne) {
			errors.addressOne = '*';
		}

		if (!values.addressTwo) {
			errors.addressTwo = '*';
		}

		if (!values.addressThree) {
			errors.addressThree = '*';
		}

		return errors;
	};

	return (
		<Formik
			initialValues={{
				name: '',
				email: '',
				password: '',
				tel: '',
				addressOne: '',
				addressTwo: '',
				addressThree: '',
			}}
			onSubmit={handleSubmit}
			validate={validations}>
			{({ handleBlur, handleChange, handleSubmit, values, errors }) => (
				<div className="loginpage">
					<form className="container-form-register" onSubmit={handleSubmit}>
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
									name="email"
									onBlur={handleBlur}
									onChange={handleChange}
									value={values.email}
								/>
								<ErrorMessage
									name="email"
									component={() => <MessageErrorType msg={errors.email} />}
								/>
								<p className="text-email">Contraseña</p>
								<input
									className="form-control mt-2"
									type="password"
									name="password"
									onBlur={handleBlur}
									onChange={handleChange}
									value={values.password}
								/>
								<ErrorMessage
									name="password"
									component={() => <MessageErrorType msg={errors.password} />}
								/>
								<p className="text-email">Telefono</p>
								<input
									className="form-control mt-2"
									type="number"
									name="tel"
									onBlur={handleBlur}
									onChange={handleChange}
									value={values.tel}
								/>
								<ErrorMessage
									name="tel"
									component={() => <MessageErrorType msg={errors.tel} />}
								/>

								<p className="text-email">Direccion</p>
								<div className="d-flex">
									<input
										className="form-control mt-2"
										type="text"
										name="addressOne"
										onBlur={handleBlur}
										onChange={handleChange}
										value={values.addressOne}
									/>
									<ErrorMessage
										name="addressOne"
										component={() => (
											<MessageErrorType
												msg={errors.addressOne}
												clase="validate-address"
											/>
										)}
									/>

									<input
										className="form-control mt-2 address-short"
										type="text"
										name="addressTwo"
										onBlur={handleBlur}
										onChange={handleChange}
										value={values.addressTwo}
									/>
									<ErrorMessage
										name="addressTwo"
										component={() => (
											<MessageErrorType
												msg={errors.addressTwo}
												clase="validate-address"
											/>
										)}
									/>
									<p className="text-email guion">-</p>
									<input
										className="form-control mt-2 address-short"
										type="text"
										name="addressThree"
										onBlur={handleBlur}
										onChange={handleChange}
										value={values.addressThree}
									/>
									<ErrorMessage
										name="addressThree"
										component={() => (
											<MessageErrorType
												msg={errors.addressThree}
												clase="validate-address"
											/>
										)}
									/>
								</div>

								<button className="btn btn-info w-100 mt-3" type="submit">
									Crear cuenta
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

export default RegisterPage;
