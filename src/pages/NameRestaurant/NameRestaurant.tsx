import { Card, ModalPlate } from '@/components';
import { useFormValues } from '@/hooks/useFormValues';

import { deletePlatesId } from '@/utilities/api/plate/deletePlates';
import { getPlatesId, getPlatesUnique } from '@/utilities/api/plate/getPlates';

import { getRestaurantiD } from '@/utilities/api/resturant/getRestaurant';
import {
	postRatingPlates,
	postRatingRestaurant,
} from '@/utilities/api/startRating/postRating';

import { Rating } from '@mui/material';

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
	const [idPlate, setIdPlate] = useState('');
	const [idPlateModal, setIdPlateModal] = useState('');
	const [actionsPlate, setActionsPlate] = useState<actionPlate>({
		actions: 'ADD',
	});
	const [actions, setActions] = useState(false);
	const [valueRating, setValueRating] = React.useState<number | null>(0);
	const [valueRatingRestaurant, setValueRatingRestaurant] = React.useState<
		number | null
	>(0);
	const local = JSON.parse(localStorage.getItem('@user') as any);
	const [plate, setPlate] = useState<any>([]);
	const { dataRestaurantId }: any = useLoaderData();
	const { response: restaurant } = dataRestaurantId;

	const [handleChange, formValues, setFormValues] = useFormValues({
		namePlate: '',
		descriptionPlate: '',
	});
	const MySwal = withReactContent(Swal);
	// const [plateImg, setPlateImg] = useState({
	// 	platesimg:
	// 		'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
	// });
	// console.log(restaurant.tel);
	// const validateActions =

	const handleRatingRestaurant = async () => {
		try {
			const respRatingRestaurant = await postRatingRestaurant(
				{ rate: valueRatingRestaurant },
				restaurant[0]?.id
			);
			const dataRatingRestaurant = await respRatingRestaurant.json();
		} catch (error) {
			throw error;
		}
	};

	useEffect(() => {
		const init = async () => {
			try {
				const responsePlatesId = await getPlatesId(restaurant[0]?.id);
				const dataPlatesId = await responsePlatesId.json();
				console.log(dataPlatesId.data);

				if (dataPlatesId.ok) {
					setPlate(dataPlatesId.data);
				}
			} catch (error) {
				throw error;
			}
		};
		init();
	}, []);

	useEffect(() => {
		const init = async () => {
			try {
				const respRating = await postRatingPlates(
					{ rate: valueRating },
					idPlate
				);
				const dataRating = await respRating.json();
			} catch (error) {
				throw error;
			}
		};
		valueRating !== 0 && init();
	}, [valueRating]);

	useEffect(() => {
		const init = async () => {
			try {
				const respPlatesUnique = await getPlatesUnique(idPlate);
				const dataPlatesUnique = await respPlatesUnique.json();

				setFormValues({
					namePlate: dataPlatesUnique.data.name,
					descriptionPlate: dataPlatesUnique.data.description,
				});
			} catch (error) {
				throw error;
			}
		};
		if (idPlate != '') init();
	}, [idPlate]);
	// ACTIONS STATE EDIT WITH TOKEN ID
	useEffect(() => {
		local?.token || local?.data?.token != undefined
			? setActions(true)
			: setActions(false);
	}, [local?.token || local?.data?.token || actions]);
	// restaurant[0].userId == local?.id || local?.data?.id
	// ? console.log(restaurant[0].id, local?.id || local?.data?.id)
	// : setActions(false)
	// const handleSubmit = async (e: any) => {
	// 	console.log(e);
	// 	e.preventDefault();
	// 	if (actionsPlate.actions == 'ADD') {
	// 		const ValuesPlate = {
	// 			image: plateImg.platesimg,
	// 			name: formValues.namePlate,
	// 			description: formValues.descriptionPlate,
	// 		};

	// 		try {
	// 			const resp = await postPlates(
	// 				ValuesPlate,
	// 				local?.token || local?.data?.token
	// 			);
	// 			const data = await resp.json();
	// 			if (resp.ok) {
	// 				console.log(data);

	// 				MySwal.fire({
	// 					position: 'top-end',
	// 					icon: 'success',
	// 					title: 'Plato creado',
	// 					showConfirmButton: false,
	// 					timer: 1500,
	// 				});
	// 				window.location.href = `/restaurante/${restaurant[0].id}`;
	// 			} else {
	// 				MySwal.fire({
	// 					icon: 'error',
	// 					title: 'Error',
	// 					text: 'No se pudo crear el plato',
	// 				});
	// 			}
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	} else if (actionsPlate.actions == 'EDIT') {
	// 		try {
	// 			const ValuesPlate = {
	// 				image: plateImg.platesimg,
	// 				name: formValues.namePlate,
	// 				description: formValues.descriptionPlate,
	// 			};

	// 			const respPutPlates = await putPlatesId(
	// 				local?.token || local?.data?.token,
	// 				idPlate,
	// 				ValuesPlate
	// 			);
	// 			const dataPutPlates = await respPutPlates.json();
	// 			if (respPutPlates.ok) {
	// 				MySwal.fire({
	// 					position: 'top-end',
	// 					icon: 'success',
	// 					title: 'Plato Editado',
	// 					showConfirmButton: false,
	// 					timer: 1500,
	// 				});
	// 			} else {
	// 				MySwal.fire({
	// 					icon: 'error',
	// 					title: 'Error',
	// 					text: 'No se pudo editar el plato',
	// 				});
	// 			}
	// 			console.log(respPutPlates);
	// 			console.log(dataPutPlates);
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	}
	// };

	const handleDeletePlate = (id: any) => {
		Swal.fire({
			title: 'Estas seguro de eliminar este plato?',
			text: '',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Eliminar',
			cancelButtonText: 'Cancelar',
		}).then((result) => {
			if (result.isConfirmed) {
				const init = async () => {
					try {
						const respPlatesId = await deletePlatesId(
							local?.token || local?.data?.token,
							id
						);
						const dataPlatesId = await respPlatesId.json();
						console.log(dataPlatesId);

						if (respPlatesId.ok) {
							navigate(`/restaurante/${restaurant?.id}`);
						} else {
							MySwal.fire({
								icon: 'error',
								title: 'Error',
								text: 'No se pudo borrar el restaurante',
							});
						}
					} catch (error) {
						throw error;
					}
				};
				init();
			}
		});
	};
	console.log(idPlate);

	return (
		<div className="namerestaurant ">
			<div className="content-restaurant">
				<div
					className="banner-img"
					style={{
						background: `url(${restaurant[0]?.image})`,
					}}></div>
				<div className="d-flex ">
					<img
						src={restaurant[0]?.image}
						alt="logo"
						className="logo-restaurant"
					/>

					<div className="m-5 title-name-restaurant ">
						<b className="white">{restaurant[0]?.name}</b>
						<p className="white">{restaurant[0]?.description}</p>
					</div>
				</div>
				<p className="qualification">
					Calificanos:{' '}
					<Rating
						color={'#FFB100'}
						className="mb-0  d-inline "
						// onClick={idRatingRestaurant}
						name="simple-controlled"
						value={valueRatingRestaurant}
						onChange={(event, newValue) => {
							setValueRatingRestaurant(newValue);
							handleRatingRestaurant();
						}}
					/>
				</p>
			</div>
			<div className="container-menu-items mr-2 ml-2 ">
				<h3 className="text-center white">PLATILLOS</h3>
				<div className="flex mt-10 gap-2 overflow-x-auto">
					{plate?.map((plates: any) => (
						<Card
							evente={() => setIdPlate(plates?.id)}
							eventeModal={() => setIdPlateModal(plates?.id)}
							idData={plates?.id}
							img={plates?.image}
							title={plates?.name}
							description={plates?.description}
							stateStart={true}
							valueRating={plates?.id == idPlate ? valueRating : 0}
							disableRating={(valueRating as any) > 0 ? true : false}
							setValueRating={setValueRating}
							idRating={() => setIdPlate(plates?.id)}
							// actions={actions}
							handleDeletePlate={() => handleDeletePlate(plates?.id)}
							handleEditPlate={() => {
								setIdPlate(plates?.id);
								setActionsPlate({ actions: 'EDIT' });
							}}
							// onChangee={false}

							classNick="pointer"
							key={plates.id}
						/>
					))}

					<hr className="mb-0" />
				</div>
				<ModalPlate id={idPlateModal} />
			</div>
			{/* {local?.token || local?.data?.token ? (
				<i
					className="fa-sharp fa-solid fa-plus addPlates pointer"
					itemType="button"
					data-toggle="modal"
					data-target="#staticBackdrop2001"
					onClick={() => setActionsPlate({ actions: 'ADD' })}></i>
			) : undefined} */}

			<i
				className="fa-brands fa-whatsapp whatsapp-atention pointer"
				onClick={() => {
					window.open(
						`https://api.whatsapp.com/send?phone=57${restaurant[0].tel}&text=Se%20encuentra%20disponible%3F`
					);
				}}></i>

			{/* <div
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
													<label className="image-upload-plate" htmlFor="input">
														Elige la foto
													</label>
												</div>
											</div>
										</div>
									</div>

									<div className="form-group w-75">
										<input
											placeholder="Nombre del restaurante"
											type="text"
											className="form-control"
											id="exampleInputPassword1"
											name="namePlate"
											onChange={handleChange}
											value={formValues.namePlate}
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
											value={formValues.descriptionPlate}></textarea>
									</div>

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
			</div> */}
		</div>
	);
};

export default NameRestaurant;

export const loaderPostRestaurant = async ({ params }: any) => {
	const respRestaurantId = await getRestaurantiD(params.id);
	const dataRestaurantId = await respRestaurantId.json();

	return { dataRestaurantId };
};
