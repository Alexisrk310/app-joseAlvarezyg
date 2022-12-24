import { AddPlate, Card } from '@/components';
import { useFormValues } from '@/hooks/useFormValues';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/RestaurantPage.css';
export interface RestaurantPageInterface {}

const RestaurantPage: React.FC<RestaurantPageInterface> = () => {
	const [handleChange, formValues, setFormValues] = useFormValues({
		imgPlate: '',
		namePlate: '',
		descriptionPlate: '',
	});
	const navigation = useNavigate();
	return (
		<div className="restaurantpage">
			<div className="img-restaurant">
				<p>RESTAURANTES</p>
			</div>
			<div className="mr-5 ml-5 mt-5 restaurant-card">
				<Card
					img="https://s3images.coroflot.com/user_files/individual_files/547169_igfq9rhfz2gkzmgy7sujtv75f.jpg"
					title="AMALA"
					description="Lorem ipsum con papas"
					specialized="Hamburguesa"
				/>
				{/* <i className="fa-solid fa-plate-utensils addPlates"></i> */}
				{/* <i className="fa-brands fa-whatsapp addPlates"></i> */}
				<i
					className="fa-sharp fa-solid fa-plus addPlates pointer"
					itemType="button"
					data-toggle="modal"
					data-target="#staticBackdrop2001"></i>
			</div>
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
								<div className="modalAddPlate">
									<div className="m-3">
										<AddPlate />
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
										<input
											placeholder="Descripcion"
											type="text"
											className="form-control"
											id="exampleInputPassword1"
											name="namePlate"
											onChange={handleChange}
											value={formValues.descriptionPlate}
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-success">
								Guardar plato
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

export default RestaurantPage;
