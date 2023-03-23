import { MessageErrorType } from '@/components';
import { ContactValues } from '@/models/interface';
import { ErrorMessage, Formik, FormikErrors } from 'formik';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import * as Yup from "yup";
import './styles/ContactUsPage.css';
export interface ContactUsPageInterface {}

const validationSchema = Yup.object().shape({
	name: Yup.string().required("Campo requerido"),
	email: Yup.string().email("Email no valido").required("Campo requerido"),
	tel: Yup.number().required("Campo requerido"),
	question: Yup.string().required("Campo requerido"),
  });

const ContactUsPage: React.FC<ContactUsPageInterface> = () => {
	const MySwal = withReactContent(Swal);
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
				() => {
					MySwal.fire({
						position: 'top-end',
						icon: 'success',
						title: 'Se ha enviado correctamente',
						showConfirmButton: false,
						timer: 1400,
					});
					location.reload()
				},
				() => {
					MySwal.fire({
						icon: 'error',
						title: 'Error',
						text: 'No se pudo enviar',
					});
				}
			);
	};

	

	return (
		<Formik
			initialValues={{ name: '', email: '', tel: '', question: '' }}
			onSubmit={handleSubmit}
			validationSchema={validationSchema}
			validateOnChange={true}
    		validateOnMount={false}>
			{({ handleBlur, handleChange, handleSubmit, values, errors }) => (
				<div className="contactuspage">
					<h1 className="contact">CONTACTENOS</h1>
					<div className="contact-form">
						<form
							className="flex flex-col gap-3"
							onSubmit={handleSubmit}
							ref={form as any}>
							<h4 className="text-2xl font-bold text-black">Formulario de contacto</h4>

							<div className="form-group input-contact">
								 <label htmlFor="name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
         						 Nombre 
       		 					</label>
								<input
									type="text"
          							name="name"
          							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          							placeholder="Escribe tu nombre completo"
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
							<label htmlFor="email" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
								Correo electronico
								</label>
								<input
									type="email"
									name="email"
									className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									placeholder="Escribe tu correo electrónico"
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
							<label htmlFor="email" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
								Telefono
								</label>
								<input
									type="number"
									name="tel"
									className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									placeholder="Escribe tu numero telefonico"
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
							<label htmlFor="email" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
								¿En que podemos ayudarte?
								</label>
								<textarea
								name="question"
								className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								rows={5}
								placeholder="Escribe tu mensaje"
									value={values.question}
									onChange={handleChange}
									onBlur={handleBlur}></textarea>
								<ErrorMessage
									name="question"
									className="text-red-500"
									component={() => <MessageErrorType msg={errors.question} />}
								/>
							</div>

							<button
          					type="submit"
          					className="bg-[#33D1CB] text-white py-2 px-4 rounded-md hover:bg-[#23B2AC]">
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
