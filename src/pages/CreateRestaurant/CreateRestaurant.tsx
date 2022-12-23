import { RestaurantValues } from '@/models/interface/RestaurantValues';
import { Formik, FormikErrors } from 'formik';
import React from 'react';
import './styles/CreateRestaurant.css';
export interface CreateRestaurantInterface {}

const CreateRestaurant: React.FC<CreateRestaurantInterface> = () => {
	const handleSubmit = (values: RestaurantValues) => {};
	const validations = (values: any) => {
		let errors: FormikErrors<RestaurantValues> = {};

		if (!values.nameRestaurant) {
			errors.nameRestaurant = 'Escribe tu correo';
		}

		return errors;
	};
	return (
		<div className="createrestaurant">
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
					<div className="loginpage">
						<form
							className="container-new-restaurant"
							onSubmit={handleSubmit}></form>
					</div>
				)}
			</Formik>
		</div>
	);
};

export default CreateRestaurant;
