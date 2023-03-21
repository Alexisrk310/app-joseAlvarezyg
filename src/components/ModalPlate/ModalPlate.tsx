import { useFormValues } from "@/hooks/useFormValues";
import { getPlatesUnique } from "@/utilities/api/plate/getPlates";
import React, { memo, useEffect, useMemo } from "react";
import "./styles/ModalPlate.css";
import NoImage from "../Card/img/sinimagen.jpg";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { postRatingRestaurant } from "@/utilities/api/startRating/postRating";


export interface ModalPlateInterface {
  id?: string;
}

const ModalPlate = ({ id, data, restaurant }: any) => {
  const [valueRatingRestaurant, setValueRatingRestaurant] = React.useState<
  number | null
>(0);
  const [handleChange, formValues, setFormValues] = useFormValues({
    img: "",
    name: "",
    description: "",
    specialty: "",
  });

  const handleRatingRestaurant = async () => {
    try {
      const respRatingRestaurant = await postRatingRestaurant(
        { rate: valueRatingRestaurant },
        restaurant[0].id
      );
      const dataRatingRestaurant = await respRatingRestaurant.json();
      location.reload()
    } catch (error) {
      throw error;
    }
  };

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
    if (id != "") init();

  }, [id]);
  console.log(formValues);

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-white flex justify-center flex-col items-center">
          <img className="w-60" src={data.image || NoImage} alt="" />
          <div>
            <h3 className="font-bold text-lg text-black">{data.name}</h3>
            <p className="py-4">{data.description}</p>
          </div>

          <div>
            <p className="py-4 flex justify-center items-center gap-2">
              Califica este Plato:
              <Rating
                size="medium"
                name="simple-controlled"
                icon={<StarIcon />}
                emptyIcon={<StarBorderOutlinedIcon className="text-black" />}
                value={valueRatingRestaurant}
                onChange={(event, newValue) => {
                  setValueRatingRestaurant(newValue);
                  handleRatingRestaurant();
                }}
              />
            </p>
          </div>

          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Cerrar
            </label>
          </div>
        </div>
      </div>
    </div>
    // <div
    // 	className="modal fade"
    // 	id={'staticBackdrop' + id}
    // 	data-backdrop="static"
    // 	data-keyboard="false"
    // 	tabIndex={-1}
    // 	aria-labelledby="staticBackdropLabel"
    // 	aria-hidden="true">
    // 	<div className="modal-dialog">
    // 		<div className="modal-content">
    // 			<div className="modal-header">
    // 				<h5 className="modal-title" id="staticBackdropLabel">
    // 					Informacion del plato
    // 				</h5>
    // 				<button
    // 					type="button"
    // 					className="close"
    // 					data-dismiss="modal"
    // 					aria-label="Close">
    // 					<span aria-hidden="true">&times;</span>
    // 				</button>
    // 			</div>
    // 			<div className="modal-body">
    // 				<div className="d-flex container-team-modals">
    // 					<div className="modalAddPlate">
    // 						<img
    // 							src={formValues.image}
    // 							alt={formValues.image}
    // 							width={200}
    // 							height={200}
    // 							className="mb-5"
    // 						/>
    // 						<div className="form-group w-75">
    // 							<input
    // 								type="text"
    // 								name="name"
    // 								className="form-control"
    // 								placeholder="Nombre"
    // 								onChange={handleChange}
    // 								value={formValues.name}
    // 								readOnly
    // 								disabled
    // 							/>
    // 						</div>
    // 						<div className="form-group w-75">
    // 							<textarea
    // 								name="description"
    // 								className="form-control resize"
    // 								placeholder="description"
    // 								onChange={handleChange}
    // 								value={formValues.description}
    // 								disabled
    // 								readOnly
    // 								rows={3}></textarea>
    // 						</div>
    // 					</div>
    // 				</div>
    // 			</div>
    // 			<div className="modal-footer">
    // 				<button
    // 					type="button"
    // 					className="btn btn-secondary text-gray-700"
    // 					data-dismiss="modal">
    // 					Cerrar
    // 				</button>
    // 			</div>
    // 		</div>
    // 	</div>
    // </div>
  );
};

export default ModalPlate;
