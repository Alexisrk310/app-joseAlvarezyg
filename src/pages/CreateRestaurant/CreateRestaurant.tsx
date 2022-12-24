import { AddPlate } from '@/components/AddPlate';
import { InputFilePreviewImage } from '@/components/InputFilePreviewImage';
import { useFormValues } from '@/hooks/useFormValues';
import { RestaurantValues } from '@/models/interface/RestaurantValues';
import { Formik, FormikErrors } from 'formik';
import React, { useState } from 'react';
import './styles/CreateRestaurant.css';
export interface CreateRestaurantInterface {}

const CreateRestaurant: React.FC<CreateRestaurantInterface> = () => {
	// const [imagesPlates, setimagesPlates] = useState([]);

	//otro

	// aqui

	const handleSubmit = (values: RestaurantValues) => {
		console.log(values);
	};
	const validations = (values: any) => {
		let errors: FormikErrors<RestaurantValues> = {};

		if (!values.specialty) {
			errors.specialty = 'Escribe especialidad';
		}
		if (!values.descriptionRestaurant) {
			errors.descriptionRestaurant = 'Escribe la descripción';
		}

		return errors;
	};
	return (
		<>
			<Formik
				initialValues={{
					name: '',
					nameRestaurant: '',
					specialty: '',
					descriptionRestaurant: '',
					department: '',
					city: '',
					address: '',
					tel: '',
					facebook: '',
					instagram: '',
				}}
				onSubmit={handleSubmit}
				validate={validations}>
				{({ handleBlur, handleChange, handleSubmit, values, errors }) => (
					<div className="createrestaurant">
						<div className=" m-5 align-self-start">
							<InputFilePreviewImage />
						</div>
						<form className="container-new-restaurant" onSubmit={handleSubmit}>
							<div className="form-group w-75">
								<input
									placeholder="Nombre"
									type="text"
									className="form-control"
									id="exampleInputPassword1"
									name="name"
									onBlur={handleBlur}
									onChange={handleChange}
									value={values.name}
								/>
							</div>
							<div className="form-group w-75">
								<input
									placeholder="Nombre del restaurante"
									type="text"
									className="form-control"
									id="exampleInputPassword1"
									name="nameRestaurant"
									onBlur={handleBlur}
									onChange={handleChange}
									value={values.nameRestaurant}
								/>
							</div>
							<div className="form-group w-75">
								<input
									placeholder="Especialidad"
									type="text"
									className="form-control"
									id="exampleInputPassword1"
									name="specialty"
									onBlur={handleBlur}
									onChange={handleChange}
									value={values.specialty}
								/>
							</div>
							<div className="form-group w-75">
								<textarea
									className="form-control"
									id="exampleFormControlTextarea1"
									rows={10}
									placeholder="Descripcion del restaurante"
									name="description"
									onBlur={handleBlur}
									onChange={handleChange}
									value={values.descriptionRestaurant}></textarea>
							</div>
							<button type="submit" className="btn btn-primary w-75">
								Guardar restaurante
							</button>
						</form>
					</div>
				)}
			</Formik>
		</>
	);
};

export default CreateRestaurant;
