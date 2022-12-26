import { Card, MessageErrorType } from '@/components';
import { ValuesPlates } from '@/models/interface';
import { deletePlatesId } from '@/utilities/api/plate/deletePlates';
import { getPlatesId } from '@/utilities/api/plate/getPlates';
import { postPlates } from '@/utilities/api/plate/postPlates';
import { putPlatesId } from '@/utilities/api/plate/putPlates';
import {
	getRestaurantiD,
	getRestaurant,
} from '@/utilities/api/resturant/getRestaurant';
import { ErrorMessage, Formik, FormikErrors } from 'formik';
import React, { useEffect, useState } from 'react';
import {
	useLoaderData,
	useNavigate,
	useRouteLoaderData,
} from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './styles/NameRestaurant.css';
export interface NameRestaurantInterface {}

interface responseGetRestaurant {
	id: string;
	name: string;
	description: string;
	specialty: string;
	userId: string;
}
interface actionPlate {
	actions: 'EDIT' | 'ADD';
}
const NameRestaurant: React.FC<NameRestaurantInterface> = () => {
	const navigate = useNavigate();
	const [idEdit, setidEdit] = useState('');
	const [actionsPlate, setActionsPlate] = useState<actionPlate>({
		actions: 'ADD',
	});
	const [valueRating, setValueRating] = React.useState<number | null>(2);
	const local = JSON.parse(localStorage.getItem('@user') as any);
	const [plate, setPlate] = useState<any>([]);
	const { dataRestaurantId }: any = useLoaderData();
	const { response: restaurant } = dataRestaurantId;

	const MySwal = withReactContent(Swal);
	const [plateImg, setPlateImg] = useState({
		platesimg:
			'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
	});
	// console.log(restaurant.tel);
	// const validateActions =
	console.log(restaurant.id);

	const HandlePlates = (e: any) => {
		const readerPlate = new FileReader();
		readerPlate.onload = () => {
			if (readerPlate.readyState === 2) {
				setPlateImg({
					platesimg: readerPlate.result,
				} as any);
			}
		};
		readerPlate.readAsDataURL(e.target.files[0]);
	};
	console.log(valueRating);

	useEffect(() => {
		const init = async () => {
			const local = JSON.parse(localStorage.getItem('@user') as any);
			try {
				const responsePlatesId = await getPlatesId(
					local?.token,
					restaurant?.id
				);
				const dataPlatesId = await responsePlatesId.json();

				if (dataPlatesId.ok) {
					console.log(dataPlatesId);

					setPlate(dataPlatesId.data);
				}
			} catch (error) {
				console.log(error);
			}
		};
		init();
	}, []);
	const validations = (values: ValuesPlates) => {
		let errors: FormikErrors<ValuesPlates> = {};

		if (!values.namePlate) {
			errors.namePlate = 'Escribe el nombre del plato';
		}

		if (!values.descriptionPlate) {
			errors.descriptionPlate = 'Escribe la descipcion del plato';
		}

		return errors;
	};

	const handleSubmit = async (values: ValuesPlates) => {
		console.log(values);
		const ValuesPlate = {
			image: plateImg.platesimg,
			name: values.namePlate,
			description: values.descriptionPlate,
		};

		try {
			const resp = await postPlates(ValuesPlate, local?.token);
			const data = await resp.json();
			if (resp.ok) {
				console.log(data);

				MySwal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Plato creado',
					showConfirmButton: false,
					timer: 1500,
				});
			} else {
				MySwal.fire({
					icon: 'error',
					title: 'Error',
					text: 'No se creo el restaurante',
				});
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleEditPlates = async (values: ValuesPlates) => {
		const respPutPlates = await putPlatesId(local?.token, idEdit, values);
		const dataPutPlates = await respPutPlates.json();
		console.log(respPutPlates);

		console.log(dataPutPlates);
	};

	const handleDeletePlate = (id: any) => {
		Swal.fire({
			title: 'Estas seguro de cerrar sesión?',
			text: '',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Cerrar sesión',
			cancelButtonText: 'Cancelar',
		}).then((result) => {
			if (result.isConfirmed) {
				const init = async () => {
					try {
						const respPlatesId = await deletePlatesId(
							local.token || local?.id_token,
							id
						);
						const dataPlatesId = await respPlatesId.json();

						if (respPlatesId.ok) {
							console.log(dataPlatesId);
							navigate(`/restaurante/${restaurant?.id}`);
						} else {
							MySwal.fire({
								icon: 'error',
								title: 'Error',
								text: 'No se pudo borrar el restaurante',
							});
						}
					} catch (error) {
						console.log(error);
					}
				};
				init();
			}
		});
	};

	let validateOwner = false;
	const tel = 3008277052;
	return (
		<div className="namerestaurant ">
			<div className="content-restaurant ">
				<img src={restaurant.image} alt="logo" className="banner-img" />
				<div className="d-flex ">
					<img src={restaurant.image} alt="logo" className="logo-restaurant" />

					<div className="m-5 title-name-restaurant ">
						<b className="white">{restaurant.name}</b>
						<p className="white">{restaurant.description}</p>
					</div>
				</div>
				<p className="qualification">Calificanos: Estrellas</p>
			</div>
			<div className="container-menu-items mr-2 ml-2 ">
				<h3 className="text-center white">PLATILLOS</h3>
				<div className="menu-items mr-5 ml-5">
					{plate?.map((plates: any) => {
						plates.restaurantid === restaurant.id
							? (validateOwner = true)
							: undefined;

						return (
							<Card
								// img={`data:image/jpeg;base64,${plates?.image}`}
								title={plates?.name}
								description={plates?.description}
								stateStart={true}
								valueRating={valueRating}
								setValueRating={setValueRating}
								actions={validateOwner}
								handleDeletePlate={() => handleDeletePlate}
								handleEditPlate={() => {
									setidEdit(plates.id);
									setActionsPlate({ actions: 'EDIT' });
								}}
								key={plates.id}
							/>
						);
					})}

					<hr className="mb-0" />
				</div>
			</div>
			<i
				className="fa-sharp fa-solid fa-plus addPlates pointer"
				itemType="button"
				data-toggle="modal"
				data-target="#staticBackdrop2001"></i>
			<i
				className="fa-brands fa-whatsapp whatsapp-atention pointer"
				onClick={() => {
					window.open(
						`https://api.whatsapp.com/send?phone=57${restaurant.tel}&text=Se%20encuentra%20disponible%3F`
					);
				}}></i>

			<Formik
				initialValues={{
					namePlate: '',
					descriptionPlate: '',
				}}
				onSubmit={
					actionsPlate.actions == 'ADD' ? handleSubmit : handleEditPlates
				}
				validate={validations}>
				{({ handleBlur, handleChange, handleSubmit, values, errors }) => (
					<div
						className="modal fade"
						id="staticBackdrop2001"
						data-backdrop="static"
						data-keyboard="false"
						tabIndex={-1}
						aria-labelledby="staticBackdropLabel"
						aria-hidden="true">
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title" id="staticBackdropLabel">
										{actionsPlate.actions == 'EDIT'
											? 'Editar plato'
											: 'Agrega un plato'}
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
										<form className="modalAddPlate" onSubmit={handleSubmit}>
											<div className="m-3">
												<div className="page-plate">
													<div className="container-plate">
														<div className="img-holder-plate">
															<img
																src={plateImg.platesimg}
																alt=""
																id="img"
																className="img-plate"
															/>
														</div>
														<input
															type="file"
															accept="image/*"
															name="image-upload"
															id="input"
															// required
															onChange={HandlePlates}
														/>
														<div className="label">
															<label
																className="image-upload-plate"
																htmlFor="input">
																Elige la foto
															</label>
														</div>
													</div>
												</div>
											</div>

											<>
												<div className="form-group w-75">
													<input
														placeholder="Nombre del restaurante"
														type="text"
														className="form-control"
														id="exampleInputPassword1"
														name="namePlate"
														onChange={handleChange}
														value={values.namePlate}
														onBlur={handleBlur}
													/>
													<ErrorMessage
														name="namePlate"
														component={() => (
															<MessageErrorType msg={errors.namePlate} />
														)}
													/>
												</div>
												<div className="form-group w-75">
													<textarea
														className="form-control"
														id="exampleFormControlTextarea1"
														rows={10}
														placeholder="Descripcion del restaurante"
														name="descriptionPlate"
														onChange={handleChange}
														onBlur={handleBlur}
														value={values.descriptionPlate}></textarea>
													<ErrorMessage
														name="descriptionPlate"
														component={() => (
															<MessageErrorType msg={errors.descriptionPlate} />
														)}
													/>
												</div>
											</>

											<button type="submit" className="btn btn-success">
												Guardar plato
											</button>
										</form>
									</div>
								</div>
								<div className="modal-footer">
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
				)}
			</Formik>
		</div>
	);
};

export default NameRestaurant;

export const loaderPostRestaurant = async ({ params }: any) => {
	const local = JSON.parse(localStorage.getItem('@user') as any);
	const respRestaurantId = await getRestaurantiD(
		params.id,
		local.token || local?.id_token
	);
	const dataRestaurantId = await respRestaurantId.json();

	return { dataRestaurantId };
};
