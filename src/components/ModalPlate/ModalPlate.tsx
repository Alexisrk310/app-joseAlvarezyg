import { useFormValues } from '@/hooks/useFormValues';
import { getPlatesUnique } from '@/utilities/api/plate/getPlates';
import React, { memo, useEffect, useMemo } from 'react';
import './styles/ModalPlate.css';
export interface ModalPlateInterface {
	id?: string;
}

const ModalPlate = ({ id }: any) => {
	const [handleChange, formValues, setFormValues] = useFormValues({
		img: '',
		name: '',
		description: '',
		specialty: '',
	});
	console.log(id);
	useEffect(() => {
		const init = async () => {
			const respPlateId = await getPlatesUnique(id);
			const dataPlateId = await respPlateId.json();
			console.log(dataPlateId);

			console.log(dataPlateId?.data[0]);

			setFormValues({
				image: dataPlateId?.data[0]?.image,
				name: dataPlateId?.data[0]?.name,
				description: dataPlateId?.data[0]?.description,
			});
		};
		if (id != '') init();
	}, [id]);
	console.log(formValues);

	return (
		<div
			className="modal fade"
			id={'staticBackdrop' + id}
			data-backdrop="static"
			data-keyboard="false"
			tabIndex={-1}
			aria-labelledby="staticBackdropLabel"
			aria-hidden="true">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="staticBackdropLabel">
							Informacion del plato
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
								<img
									src={formValues.image}
									alt={formValues.image}
									width={200}
									height={200}
									className="mb-5"
								/>
								<div className="form-group w-75">
									<input
										type="text"
										name="name"
										className="form-control"
										placeholder="Nombre"
										onChange={handleChange}
										value={formValues.name}
										readOnly
										disabled
									/>
								</div>
								<div className="form-group w-75">
									<textarea
										name="description"
										className="form-control resize"
										placeholder="description"
										onChange={handleChange}
										value={formValues.description}
										disabled
										readOnly
										rows={3}></textarea>
								</div>
							</div>
						</div>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary text-gray-700"
							data-dismiss="modal">
							Cerrar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalPlate;
