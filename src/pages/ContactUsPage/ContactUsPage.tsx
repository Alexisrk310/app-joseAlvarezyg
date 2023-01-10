import { MessageErrorType } from '@/components';
import { ContactValues } from '@/models/interface';
import { ErrorMessage, Formik, FormikErrors } from 'formik';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

import './styles/ContactUsPage.css';
export interface ContactUsPageInterface {}

const ContactUsPage: React.FC<ContactUsPageInterface> = () => {
	const form = useRef();
	const handleSubmit = (value: ContactValues) => {
		console.log(form.current as any);

		emailjs
			.sendForm(
				'service_7lkr3r6',
				'template_axvzoia',
				form.current as any,
				'TjewiMush9fCx2oFx'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	const validations = (values: ContactValues) => {
		let errors: FormikErrors<ContactValues> = {};
		if (!values.name) {
			errors.name = 'Escribe tu nombre';
		}
		if (!values.email) {
			errors.email = 'Escribe tu correo';
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
		) {
			errors.email = '@example.com*';
		}
		if (!values.tel) {
			errors.tel = 'Escribe tu telefono';
		}
		if (!values.question) {
			errors.question = 'Es que podemos ayudarte?';
		}
		console.log(errors);

		return errors;
	};

	return (
		<Formik
			initialValues={{ name: '', email: '', tel: '', question: '' }}
			onSubmit={handleSubmit}
			validate={validations}>
			{({ handleBlur, handleChange, handleSubmit, values, errors }) => (
				<div className="contactuspage">
					<h1 className="contact">CONTACTENOS</h1>
					<div className="contact-form">
						<form
							className="form-contact"
							onSubmit={handleSubmit}
							ref={form as any}>
							<h4 className="text-center">Formulario de contacto</h4>

							<div className="form-group input-contact">
								<label>Nombre</label>
								<input
									type="text"
									className="form-control"
									name="name"
									value={values.name}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								<ErrorMessage
									name="name"
									component={() => <MessageErrorType msg={errors.name} />}
								/>
							</div>
							<div className="form-group input-contact">
								<label>Correo electronico</label>
								<input
									type="text"
									className="form-control"
									name="email"
									value={values.email}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								<ErrorMessage
									name="email"
									component={() => <MessageErrorType msg={errors.email} />}
								/>
							</div>
							<div className="form-group input-contact">
								<label>Telefono</label>
								<input
									type="text"
									className="form-control"
									name="tel"
									value={values.tel}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								<ErrorMessage
									name="tel"
									component={() => <MessageErrorType msg={errors.tel} />}
								/>
							</div>
							<div className="form-group input-contact">
								<label>¿En que podemos ayudarte?</label>
								<textarea
									className="form-control textarea-contact"
									rows={3}
									name="question"
									value={values.question}
									onChange={handleChange}
									onBlur={handleBlur}></textarea>
								<ErrorMessage
									name="question"
									component={() => <MessageErrorType msg={errors.question} />}
								/>
							</div>

							<button type="submit" className="btn btn-primary w-50">
								Enviar
							</button>
						</form>
					</div>
				</div>
			)}
		</Formik>
	);
};

export default ContactUsPage;
