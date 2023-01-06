import { MessageErrorType } from '@/components';
import { AddPlate } from '@/components/AddPlate';
import { InputFilePreviewImage } from '@/components/InputFilePreviewImage';
import { useFormValues } from '@/hooks/useFormValues';
import { RestaurantValues } from '@/models/interface/RestaurantValues';
import { getRestaurantiD } from '@/utilities/api/resturant/getRestaurant';
import { addRestaurant } from '@/utilities/api/resturant/postRestaurant';
import { putRestaurant } from '@/utilities/api/resturant/putRestaurant';
import { ErrorMessage, Formik, FormikErrors } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './styles/CreateRestaurant.css';
export interface CreateRestaurantInterface {}

const CreateRestaurant: React.FC<CreateRestaurantInterface> = () => {
	const navigate = useNavigate();
	const MySwal = withReactContent(Swal);
	const local = JSON.parse(localStorage.getItem('@user') as any);
	const [actions, setActions] = useState<boolean>(false);
	const [state, setState] = useState(false);
	const [restaurantId, setRestaurantId] = useState({});
	const [profileImg, setProfileImg] = useState({
		imgPlate:
			'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
	});

	const [handleChange, formValues, setFormValues] = useFormValues({
		name: '',
		specialty: '',
		description: '',
		department: '',
		city: '',
		address: '',
		tel: '',
		facebook: '',
		instagram: '',
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

	useEffect(() => {
		const init = async () => {
			const respRestaurantId = await getRestaurantiD(
				local?.id || local?.data?.id
			);
			const dataRestauranteId = await respRestaurantId.json();

			setRestaurantId(dataRestauranteId.response[0]);
		};
		init();
	}, []);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const local = JSON.parse(localStorage.getItem('@user') as any);
		console.log(profileImg.imgPlate);

		if (state === true) {
			if (actions == false) {
				// CREAR RESTAURANTE
				const ValueRestaurant = {
					image: profileImg.imgPlate,
					name: formValues.name,
					specialty: formValues.specialty,
					description: formValues.description,
				};

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
						// navigate('/restaurante');
					}
				} catch (error) {
					console.log(error);
				}
			} else if (actions === true) {
				// EDITAR RESTAURANTE

				const ValueRestaurant = {
					image: profileImg.imgPlate,
					name: formValues.name,
					specialty: formValues.specialty,
					description: formValues.description,
				};

				try {
					const respModifyResta = await putRestaurant(
						ValueRestaurant,
						local?.token,
						local?.id
					);
					const dataModifyResta = await respModifyResta.json();
					if (dataModifyResta.ok) {
						console.log(dataModifyResta);

						MySwal.fire({
							position: 'top-end',
							icon: 'success',
							title: dataModifyResta.msg,
							showConfirmButton: false,
							timer: 1500,
						});
						// navigate('/restaurante');
					} else {
						console.log(dataModifyResta);
						MySwal.fire({
							icon: 'error',
							title: 'Error',
							text: dataModifyResta.msg,
						});
						// navigate('/restaurante');
					}
				} catch (error) {
					console.log(error);
				}
			}
		}
	};

	return (
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
						// name="name"
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
						name="name"
						onChange={handleChange}
						value={formValues.name}
					/>
				</div>
				<div className="form-group w-75">
					<input
						placeholder="Especialidad"
						type="text"
						className="form-control"
						name="specialty"
						onChange={handleChange}
						value={formValues.specialty}
					/>
				</div>
				<div className="form-group w-75">
					<textarea
						className="form-control"
						rows={10}
						placeholder="Descripcion del restaurante"
						name="description"
						onChange={handleChange}
						value={formValues.description}></textarea>
				</div>
				<div className="d-flex  w-75">
					<p
						onClick={() => setActions(!actions)}
						className="btn btn-info m-1 w-100">
						{actions === true ? (
							<>
								Editar <i className="fa-solid fa-pen-to-square"></i>
							</>
						) : (
							<>
								Crear <i className="fa-solid fa-circle-plus"></i>
							</>
						)}
					</p>
					<button
						type="submit"
						onClick={() => setState(true)}
						className="btn m-1 btn-primary w-100">
						{actions === true ? 'Editar restaurante' : 'Crear restaurante'}
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreateRestaurant;
