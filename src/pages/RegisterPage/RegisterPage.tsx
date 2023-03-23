import { Loader, LoaderAuth, MessageErrorType } from '@/components';
import { ValuesRegister } from '@/models/interface/authValues';
import { auth } from '@/utilities/api/auth/auth';
import { ErrorMessage, Formik, FormikErrors } from 'formik';
import React, { useState } from 'react';
import './styles/RegisterPage.css';
// import { useSelector } from 'react-redux';
// import { RootState } from '@/store/store';
import { AuthGoogle } from '@/components/AuthGoogle';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';
import Terminos from '../../components/Footer/document/Términos y condiciones de uso Pagina Jose.pdf'


export interface RegisterPageInterface {}

const RegisterPage: React.FC<RegisterPageInterface> = () => {
	const [stateLoading, setstateLoading] = useState(false);
	const MySwal = withReactContent(Swal);
	const navigate = useNavigate();
	// const authState = useSelector((state: RootState) => state.auth);
	// console.log(authState);

	const handleSubmit = async (value: ValuesRegister) => {
		setstateLoading(true);
		try {
			const dataResp = await auth('register', value);

			const resp = await dataResp.json();
			console.log(resp);

			if (dataResp.status == 200 || dataResp.status == 201) {
				setstateLoading(false);
				localStorage.setItem(
					'@user',
					JSON.stringify(resp.data || resp.payload)
				);

				navigate('/restaurante/crear');
			} else {
				setstateLoading(false);
				MySwal.fire({
					icon: 'error',
					title: 'Error',
					text: 'No se pudo crear tu cuenta',
				});
			}
		} catch (error) {
			throw error;
		}
	};

	const validations = (values: ValuesRegister) => {
		let errors: FormikErrors<ValuesRegister> = {};
		if (!values.name) {
			errors.name = 'Escriba su nombre';
		} else if (!/^[a-zA-Z0-9]{4,50}$/.test(values.name)) {
			errors.name = 'Minimo 4, maximo 50 caracteres ';
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
						<p className="text-center log-in text-2xl font-bold text-black">Crear cuenta</p>

						<div className="container-input">
							<div className="container-p-input flex flex-col space-y-2">
								<p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Nombre</p>
								<input
									className="form-control auth appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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

								<p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Correo electronico</p>
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
								<p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Contraseña</p>
								<input
									className="form-control auth appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
								<p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Telefono</p>
								<input
									className="form-control auth appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									type="tel"
									name="tel"
									onBlur={handleBlur}
									onChange={handleChange}
									value={values.tel}
								/>
								<ErrorMessage
									name="tel"
									component={() => <MessageErrorType msg={errors.tel} />}
								/>

								<p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Direccion</p>
								<div className="d-flex">
									<input
										className="form-control auth appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
										className="form-control mt-2 address-short auth appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
									<p className="text-email guion text-black">-</p>
									<input
										className="form-control mt-2 address-short auth appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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

								<button className="bg-[#33D1CB] text-white py-2 px-4 rounded-md hover:bg-[#23B2AC]" type="submit">
									{!stateLoading ? 'Crear cuenta' : <LoaderAuth />}
								</button>
								<p className="text-center mt-5">O</p>
								<AuthGoogle />
								<p className="text-center text-black">
									{' '}Al iniciar sesion o crear una cuenta esta aceptando nuestros {' '}
									<a href={Terminos} download={Terminos} className="cursor-pointer text-info polity">terminos y condiciones y</a>
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
