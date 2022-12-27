import { MessageErrorType } from '@/components';
import { AddPlate } from '@/components/AddPlate';
import { InputFilePreviewImage } from '@/components/InputFilePreviewImage';
import { useFormValues } from '@/hooks/useFormValues';
import { RestaurantValues } from '@/models/interface/RestaurantValues';
import { addRestaurant } from '@/utilities/api/resturant/postRestaurant';
import { ErrorMessage, Formik, FormikErrors } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './styles/CreateRestaurant.css';
export interface CreateRestaurantInterface {}

const CreateRestaurant: React.FC<CreateRestaurantInterface> = () => {
	const navigate = useNavigate();
	const MySwal = withReactContent(Swal);
	const local = JSON.parse(localStorage.getItem('@user') as any);
	const [profileImg, setProfileImg] = useState({
		imgPlate:
			'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
	});

	const imageHandler = (e: any) => {
		const readerProfile = new FileReader();
		readerProfile.onload = () => {
			if (readerProfile.readyState === 2) {
				setProfileImg({
					imgPlate: readerProfile.result,
				} as any);
			}
		};
		readerProfile.readAsDataURL(e.target.files[0]);
	};
	const handleSubmit = async (values: RestaurantValues) => {
		console.log(values);
		const local = JSON.parse(localStorage.getItem('@user') as any);
		console.log(profileImg.imgPlate);

		const ValueRestaurant = {
			image: profileImg.imgPlate,
			name: values.name,
			specialty: values.specialty,
			description: values.description,
		};
		console.log(local.name);

		try {
			const addResta = await addRestaurant(
				ValueRestaurant,
				local?.token || local?.data?.token
			);
			const resp = await addResta.json();
			if (resp.ok) {
				console.log(resp);

				MySwal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Restaurante creado',
					showConfirmButton: false,
					timer: 1500,
				});
				navigate('/restaurante');
			} else {
				console.log(resp);
				MySwal.fire({
					icon: 'error',
					title: 'Error',
					text: resp.msg,
				});
				navigate('/restaurante');
			}
		} catch (error) {
			console.log(error);
		}
	};
	const validations = (values: any) => {
		let errors: FormikErrors<RestaurantValues> = {};
		if (!values.name) {
			errors.name = 'Escribe el nombre del restaurante';
		}
		if (!values.specialty) {
			errors.specialty = 'Escribe la especialidad del restaurante';
		}
		if (!values.description) {
			errors.description = 'Escribe la descripción del restaurante';
		}

		return errors;
	};
	return (
		<>
			<Formik
				initialValues={{
					name: '',
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
						<div className=" m-5 align-self-start">
							<div className="page-all">
								<div className="container-preview-restaurant">
									<div className="img-holder">
										<img
											src={profileImg.imgPlate}
											alt=""
											id="img"
											className="img-of-restaurant"
										/>
									</div>
									<input
										type="file"
										accept="image/*"
										name="image-upload"
										id="input"
										onChange={imageHandler}
									/>
									<div className="label">
										<label className="image-upload" htmlFor="input">
											Foto de restaurante
										</label>
									</div>
								</div>
							</div>
						</div>
						<form className="container-new-restaurant" onSubmit={handleSubmit}>
							<div className="form-group w-75">
								<input
									placeholder="Nombre"
									type="text"
									className="form-control"
									id="exampleInputPassword1"
									// name="name"
									// onBlur={handleBlur}
									onChange={handleChange}
									value={local?.data?.payload?.name || local?.name}
									readOnly
								/>
							</div>
							<div className="form-group w-75">
								<input
									placeholder="Nombre del restaurante"
									type="text"
									className="form-control"
									id="exampleInputPassword1"
									name="name"
									onBlur={handleBlur}
									onChange={handleChange}
									value={values.name}
								/>
								<ErrorMessage
									name="name"
									component={() => <MessageErrorType msg={errors.name} />}
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
								<ErrorMessage
									name="specialty"
									component={() => <MessageErrorType msg={errors.specialty} />}
								/>
							</div>
							<div className="form-group w-75">
								<textarea
									className="form-control"
									// id="exampleFormControlTextarea1"
									rows={10}
									placeholder="Descripcion del restaurante"
									name="description"
									onBlur={handleBlur}
									onChange={handleChange}
									value={values.description}></textarea>
								<ErrorMessage
									name="description"
									component={() => (
										<MessageErrorType msg={errors.description} />
									)}
								/>
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
