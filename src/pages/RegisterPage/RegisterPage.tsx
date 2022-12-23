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

export interface RegisterPageInterface {}

const RegisterPage: React.FC<RegisterPageInterface> = () => {
	const authState = useSelector((state: RootState) => state.auth);
	console.log(authState);

	const handleSubmit = async (value: ValuesRegister) => {
		// console.log(value);

		try {
			const dataResp = await auth('register', value);
			const resp = await dataResp.json();
			console.log(dataResp);
			console.log(resp);
			const MySwal = withReactContent(Swal);

			if (dataResp.status == 200 || dataResp.status == 201) {
				MySwal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Cuenta creada',
					showConfirmButton: false,
					timer: 1500,
				});
				localStorage.setItem('@user', resp);
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

		if (!values.nameRestaurant) {
			errors.nameRestaurant = 'Escriba su restaurante';
		}

		if (!values.addresOne) {
			errors.addresOne = '*';
		}

		if (!values.addresTwo) {
			errors.addresTwo = '*';
		}

		if (!values.addresThree) {
			errors.addresThree = '*';
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
				nameRestaurant: '',
				addresOne: '',
				addresTwo: '',
				addresThree: '',
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
								<p className="text-email">Nombre del restaurante</p>
								<input
									className="form-control mt-2"
									type="text"
									name="nameRestaurant"
									onBlur={handleBlur}
									onChange={handleChange}
									value={values.nameRestaurant}
								/>
								<ErrorMessage
									name="nameRestaurant"
									component={() => (
										<MessageErrorType msg={errors.nameRestaurant} />
									)}
								/>

								<p className="text-email">Direccion</p>
								<div className="d-flex">
									<input
										className="form-control mt-2"
										type="text"
										name="addresOne"
										onBlur={handleBlur}
										onChange={handleChange}
										value={values.addresOne}
									/>
									<ErrorMessage
										name="addresOne"
										component={() => (
											<MessageErrorType
												msg={errors.addresOne}
												clase="validate-address"
											/>
										)}
									/>

									<input
										className="form-control mt-2 address-short"
										type="text"
										name="addresTwo"
										onBlur={handleBlur}
										onChange={handleChange}
										value={values.addresTwo}
									/>
									<ErrorMessage
										name="addresTwo"
										component={() => (
											<MessageErrorType
												msg={errors.addresTwo}
												clase="validate-address"
											/>
										)}
									/>
									<p className="text-email guion">-</p>
									<input
										className="form-control mt-2 address-short"
										type="text"
										name="addresThree"
										onBlur={handleBlur}
										onChange={handleChange}
										value={values.addresThree}
									/>
									<ErrorMessage
										name="addresThree"
										component={() => (
											<MessageErrorType
												msg={errors.addresThree}
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
