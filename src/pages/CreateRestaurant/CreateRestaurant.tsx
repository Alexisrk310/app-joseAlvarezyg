import { RestaurantValues } from '@/models/interface/RestaurantValues';
import { Formik, FormikErrors } from 'formik';
import React, { useState } from 'react';
import './styles/CreateRestaurant.css';
export interface CreateRestaurantInterface {}

const CreateRestaurant: React.FC<CreateRestaurantInterface> = () => {
	const [imgRestaurant, setimgRestaurant] = useState({ img: '' });
	const [imgPlates, setimgPlates] = useState({ img: '' });
	const handleSubmit = (values: RestaurantValues) => {};
	const validations = (values: any) => {
		let errors: FormikErrors<RestaurantValues> = {};

		if (!values.specialty) {
			errors.specialty = 'Escribe especialidad';
		}
		if (!values.description) {
			errors.description = 'Escribe la descripción';
		}

		return errors;
	};
	return (
		<Formik
			initialValues={{
				name: '',
				nameRestaurant: '',
				specialty: '',
				description: '',
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
					<div>
						<input type="file" />
					</div>
					<form className="container-new-restaurant" onSubmit={handleSubmit}>
						<div className="form-group">
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
						<div className="form-group">
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
						<div className="form-group">
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
					</form>
					<div>
						<input type="file" />
					</div>
				</div>
			)}
		</Formik>
	);
};

export default CreateRestaurant;
