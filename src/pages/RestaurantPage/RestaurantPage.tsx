import { AddPlate, Card, MessageErrorType } from '@/components';
import { useFormValues } from '@/hooks/useFormValues';
import { ValuesPlates } from '@/models/interface';
import { postPlates } from '@/utilities/api/plate/postPlates';
import { getRestaurant } from '@/utilities/api/resturant/getRestaurant';
import { addRestaurant } from '@/utilities/api/resturant/postRestaurant';
import { ErrorMessage, Formik, FormikErrors } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './styles/RestaurantPage.css';
export interface RestaurantPageInterface {}
interface responseGetRestaurant {
	id: string;
	name: string;
	image?: string;
	description: string;
	specialty: string;
	userId: string;
}
const RestaurantPage: React.FC<RestaurantPageInterface> = () => {
	const MySwal = withReactContent(Swal);
	const [restaurant, setRestaurant] = useState([]);
	const [plateImg, setPlateImg] = useState({
		platesimg:
			'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
	});

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

	const local = JSON.parse(localStorage.getItem('@user') as any);
	const navigation = useNavigate();
	useEffect(() => {
		const init = async () => {
			console.log(local?.token || local?.id_token);
			const data = await getRestaurant(local?.token || local?.id_token);
			const resp = await data.json();
			// console.log(data);
			console.log(restaurant);
			setRestaurant(resp.data);
		};
		init();
	}, []);

	const handleSubmit = async (values: ValuesPlates) => {
		console.log(values);
		const ValuesPlate = {
			image: plateImg.platesimg,
			name: values.namePlate,
			description: values.descriptionPlate,
		};
		const resp = await postPlates(ValuesPlate, local?.token || local?.id_token);
		const data = await resp.json();
		try {
			if (resp.ok) {
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

	return (
		<div className="restaurantpage">
			<div className="img-restaurant">
				<p>RESTAURANTES</p>
			</div>
			<div className="mr-5 ml-5 mt-5 restaurant-card">
				{restaurant?.map((cardRestaurant: responseGetRestaurant) => (
					<Card
						img={cardRestaurant?.image}
						title={cardRestaurant?.name}
						description={cardRestaurant.description}
						specialized={cardRestaurant.specialty}
						key={cardRestaurant.id}
						evente={() => navigation(`/restaurante/${cardRestaurant.id}`)}
					/>
				))}

				<i
					className="fa-sharp fa-solid fa-plus addPlates pointer"
					itemType="button"
					data-toggle="modal"
					data-target="#staticBackdrop2001"></i>
			</div>
			<Formik
				initialValues={{
					namePlate: '',
					descriptionPlate: '',
				}}
				onSubmit={handleSubmit}
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
										Agrega un plato
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

export default RestaurantPage;
