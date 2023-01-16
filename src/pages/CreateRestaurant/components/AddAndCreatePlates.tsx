import { LoaderAuth } from '@/components';
import { useFormValues } from '@/hooks/useFormValues';
import { postPlates } from '@/utilities/api/plate/postPlates';
import { putPlatesId } from '@/utilities/api/plate/putPlates';
import React, { useEffect, useState } from 'react';
import { getPlatesUnique } from '@/utilities/api/plate/getPlates';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import '../styles/CreateRestaurant.css';

const AddAndCreatePlates = ({ actionsPlate, idPlate }: any) => {
	const [stateLoading, setstateLoading] = useState(false);
	const [handleChange, formValues, setFormValues] = useFormValues({
		image:
			'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
		name: '',
		description: '',
	});

	const local = JSON.parse(localStorage.getItem('@user') as any);
	const MySwal = withReactContent(Swal);
	useEffect(() => {
		//   GET PLATES FOR ID - EDIT
		const init = async () => {
			const respPlateUnique = await getPlatesUnique(idPlate);
			const dataPlateUnique = await respPlateUnique.json();
			console.log(dataPlateUnique);

			setFormValues({
				...formValues,
				image: dataPlateUnique?.data[0]?.image,
				namePlate: dataPlateUnique?.data[0]?.name,
				descriptionPlate: dataPlateUnique?.data[0]?.description,
			});
		};
		if (idPlate !== '') init();
	}, [idPlate]);

	const handleSubmitCreateAndEdit = async (e: any) => {
		console.log(e);
		e.preventDefault();
		setstateLoading(true);
		if (actionsPlate.actions == 'ADD') {
			const ValuesPlate = {
				image: formValues.image,
				name: formValues.namePlate,
				description: formValues.descriptionPlate,
			};
			console.log(local?.token || local?.data?.token);

			try {
				const resp = await postPlates(
					ValuesPlate,
					local?.token || local?.data?.token
				);
				const data = await resp.json();
				if (resp.ok) {
					setstateLoading(false);
					console.log(data);

					MySwal.fire({
						position: 'top-end',
						icon: 'success',
						title: 'Plato creado',
						showConfirmButton: false,
						timer: 1500,
					});
				} else {
					setstateLoading(false);
					MySwal.fire({
						icon: 'error',
						title: 'Error',
						text: 'No se pudo crear el plato',
					});
				}
			} catch (error) {
				console.log(error);
			}
		} else if (actionsPlate.actions == 'EDIT') {
			try {
				const ValuesPlate = {
					image: formValues.image,
					name: formValues.namePlate,
					description: formValues.descriptionPlate,
				};

				const respPutPlates = await putPlatesId(
					local?.token || local?.data?.token,
					idPlate,
					ValuesPlate
				);
				const dataPutPlates = await respPutPlates.json();
				if (respPutPlates.ok) {
					setstateLoading(false);
					MySwal.fire({
						position: 'top-end',
						icon: 'success',
						title: 'Plato Editado',
						showConfirmButton: false,
						timer: 1500,
					});
				} else {
					setstateLoading(false);
					MySwal.fire({
						icon: 'error',
						title: 'Error',
						text: 'No se pudo editar el plato',
					});
				}
				console.log(respPutPlates);
				console.log(dataPutPlates);
			} catch (error) {
				console.log(error);
			}
		}
	};

	const HandlePlate = (e: any) => {
		const readerPlate = new FileReader();
		readerPlate.onload = () => {
			if (readerPlate.readyState === 2) {
				setFormValues({
					...formValues,
					image: readerPlate.result as string,
				});
			}
		};
		readerPlate.readAsDataURL(e.target.files[0]);
	};
	return (
		<>
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
								<div className="modalAddPlate">
									<div className="m-3">
										<div className="page-plate">
											<div className="container-plate">
												<div className="img-holder-plate">
													<img
														src={formValues.image}
														alt=""
														id="img"
														className="img-plate"
													/>
													<input
														type="file"
														accept="image/*"
														name="image-upload"
														id="inputPlate"
														// required
														onChange={HandlePlate}
													/>
												</div>

												{/* <div className="label">
													<label className="image-upload-plate" htmlFor="input">
														Elige la foto
													</label>
												</div> */}
											</div>
										</div>
									</div>

									<div className="form-group w-75">
										<input
											placeholder="Nombre del plato"
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
											placeholder="Descripcion del plato"
											name="descriptionPlate"
											onChange={handleChange}
											value={formValues.descriptionPlate}></textarea>
									</div>
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<button
								className="btn btn-success"
								onClick={handleSubmitCreateAndEdit}>
								{actionsPlate.actions === 'ADD'
									? 'Crear plato '
									: 'Editar plato '}
								{!stateLoading ? '' : <LoaderAuth />}
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
		</>
	);
};

export default AddAndCreatePlates;
