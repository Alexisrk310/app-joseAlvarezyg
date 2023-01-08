import { useFormValues } from '@/hooks/useFormValues';
import { getRestaurantiD } from '@/utilities/api/resturant/getRestaurant';
import { addRestaurant } from '@/utilities/api/resturant/postRestaurant';
import { putRestaurant } from '@/utilities/api/resturant/putRestaurant';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import AddAndCreatePlates from './components/AddAndCreatePlates';
import './styles/CreateRestaurant.css';
export interface CreateRestaurantInterface {}
interface actionRestaurantAndPlate {
	actions: 'EDIT' | 'ADD';
}
const CreateRestaurant: React.FC<CreateRestaurantInterface> = () => {
	const [actionsPlate, setActionsPlate] = useState<actionRestaurantAndPlate>({
		actions: 'ADD',
	});
	const [actionRestaurant, setActionRestaurant] =
		useState<actionRestaurantAndPlate>({
			actions: 'ADD',
		});
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
		image: '',
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
	const convertBase64 = (file: any) => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);
			fileReader.onload = () => {
				resolve(fileReader.result);
			};
			fileReader.onerror = (error) => {
				reject(error);
			};
		});
	};
	const imageHandler = async (e: any) => {
		const file = e.target.files[0];
		const base64 = await convertBase64(file);
		setProfileImg({
			imgPlate: base64,
		} as any);

		// const readerProfile = new FileReader();
		// console.log(e.target.files[0]);
		// readerProfile.onload = () => {
		// 	if (readerProfile.readyState === 2) {
		// 		setProfileImg({
		// 			imgPlate: readerProfile.result,
		// 		} as any);
		// 	}
		// };
		// readerProfile.readAsDataURL(e.target.files[0]);
		// console.log(e);
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
		if (actionRestaurant.actions == 'ADD') {
			e.preventDefault();
			const local = JSON.parse(localStorage.getItem('@user') as any);

			const ValueRestaurant = {
				image: profileImg.imgPlate,
				name: formValues.name,
				specialty: formValues.specialty,
				description: formValues.description,
				department: formValues.department,
				city: formValues.city,
				// address: formValues.address,
				tel: parseInt(formValues.tel),
				facebook: formValues.facebook,
				instagram: formValues.instagram,
			};

			try {
				const addResta = await addRestaurant(
					ValueRestaurant,
					local?.token || local?.data?.token
				);
				const resp = await addResta.json();
				console.log(resp);
				if (resp.ok) {
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
		} else if (actionRestaurant.actions == 'EDIT') {
			// EDITAR RESTAURANTE
			console.log('Editar restaurante');

			const ValueRestaurantEdit = {
				image: profileImg.imgPlate,
				name: formValues.name,
				specialty: formValues.specialty,
				description: formValues.description,
				department: formValues.department,
				city: formValues.city,
				// address: formValues.address,
				tel: parseInt(formValues.tel),
				facebook: formValues.facebook,
				instagram: formValues.instagram,
			};

			try {
				const respModifyResta = await putRestaurant(
					ValueRestaurantEdit,
					local?.token || local?.data?.token,
					local?.id || local?.data?.id
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
							accept=".png, .jpg, .jpeg"
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
			<div className="container-new-restaurant">
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
						className="form-control resize"
						rows={10}
						placeholder="Descripcion del restaurante"
						name="description"
						onChange={handleChange}
						value={formValues.description}></textarea>
				</div>
				<div className="d-flex  w-75">
					<p
						onClick={() => setActions(!actions)}
						className="btn btn-info m-1 w-10">
						{actions === true ? (
							<i className="fa-solid fa-pen-to-square editAndCreate"></i>
						) : (
							<i className="fa-solid fa-circle-plus editAndCreate"></i>
						)}
					</p>
					{actions === true ? (
						<button
							type="submit"
							itemType="button"
							data-toggle="modal"
							data-target="#staticBackdropInfo"
							className="btn m-1 btn-primary w-100"
							onClick={() => setActionRestaurant({ actions: 'EDIT' })}>
							Editar mas informacion
						</button>
					) : (
						<p
							itemType="button"
							data-toggle="modal"
							data-target="#staticBackdropInfo"
							className="btn m-1 btn-primary w-100"
							onClick={() => setActionRestaurant({ actions: 'ADD' })}>
							Mas informacion
						</p>
					)}
				</div>
			</div>
			<div className="buttonPlates align-self-start m-5">
				<div className="plate-logo"></div>
				<button
					className="btn btn-primary mt-2"
					itemType="button"
					data-toggle="modal"
					data-target="#staticBackdrop2001"
					onClick={() => setActionsPlate({ actions: 'ADD' })}>
					Añadir plato
				</button>
			</div>
			{/* ADD PLATE */}

			<AddAndCreatePlates actionsPlate={actionsPlate} />
			{/* END PLATE */}
			<div
				className="modal fade"
				id="staticBackdropInfo"
				data-backdrop="static"
				data-keyboard="false"
				tabIndex={-1}
				aria-labelledby="staticBackdropLabel"
				aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="staticBackdropLabel">
								Información adicional
							</h5>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<div className="d-flex container-team-modals">
								<div className="modalAddPlate">
									<div className="d-flex form-group">
										<input
											type="text"
											name="department"
											className="form-control"
											placeholder="Departmento"
											onChange={handleChange}
											value={formValues.department}
										/>
										<input
											type="text"
											name="city"
											className="form-control"
											placeholder="Ciudad"
											onChange={handleChange}
											value={formValues.city}
										/>
									</div>
									{/* <div className="form-group w-75">
										<input
											type="text"
											name="address"
											className="form-control"
											placeholder="Direccion"
											onChange={handleChange}
											value={formValues.address}
										/>
									</div> */}
									<div className="form-group w-75">
										<input
											type="tel"
											name="tel"
											className="form-control"
											placeholder="Telefono"
											onChange={handleChange}
											value={formValues.tel}
										/>
									</div>
									<div className="form-group d-flex">
										<input
											type="text"
											name="facebook"
											className="form-control"
											placeholder="Link Facebook"
											onChange={handleChange}
											value={formValues.facebook}
										/>
										<input
											type="tel"
											name="instagram"
											className="form-control"
											placeholder="Link Instagram"
											onChange={handleChange}
											value={formValues.instagram}
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-success"
								data-dismiss="modal"
								onClick={handleSubmit}>
								{actionRestaurant.actions == 'EDIT'
									? 'Editar Restaurante'
									: 'Añadir Restaurante'}
							</button>
							<button
								type="button"
								className="btn btn-secondary"
								data-dismiss="modal">
								Cerrar
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateRestaurant;
