import { LoaderAuth } from "@/components";
import { useFormValues } from "@/hooks/useFormValues";
import {
	getRestaurantiD,
	getRestaurantiDUsuario,
} from "@/utilities/api/resturant/getRestaurant";
import { getPlatesId } from "@/utilities/api/plate/getPlates";
import { addRestaurant } from "@/utilities/api/resturant/postRestaurant";
import { putRestaurant } from "@/utilities/api/resturant/putRestaurant";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import AddAndCreatePlates from "./components/AddAndCreatePlates";
import "./styles/CreateRestaurant.css";
export interface CreateRestaurantInterface {}
interface actionRestaurantAndPlate {
	actions: "EDIT" | "ADD" | "";
}
interface restaurantIdUser {
	id: string;
	name: string;
	description: string;
	specialty: string;
	image: string;
	department: string;
	city: string;
	tel: string;
	instagram: string;
	facebook: string;
}

type PlateIdRestaurant = {
	id: string;
	name: string;
	description: string;
	image: string;
	restaurantId: string;
};

const CreateRestaurant: React.FC<CreateRestaurantInterface> = () => {
	const [actionsPlate, setActionsPlate] = useState<actionRestaurantAndPlate>({
		actions: "ADD",
	});
	const [actionRestaurant, setActionRestaurant] =
		useState<actionRestaurantAndPlate>({
			actions: "ADD",
		});
	const navigate = useNavigate();
	const MySwal = withReactContent(Swal);
	const local = JSON.parse(localStorage.getItem("@user") as any);
	const [actions, setActions] = useState<boolean>(false);
	const [platesByID, setplatesByID] = useState([]);
	const [restaurant, setRestaurant] = useState<restaurantIdUser>({
		id: "",
		name: "",
		description: "",
		specialty: "",
		image: "",
		department: "",
		city: "",
		tel: "",
		instagram: "",
		facebook: "",
	});
	const [profileImg, setProfileImg] = useState({
		imgPlate:
			"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
	});

	const [handleChange, formValues, setFormValues] = useFormValues({
		image: "",
		name: "",
		specialty: "",
		description: "",
		department: "",
		city: "",
		address: "",
		tel: "",
		facebook: "",
		instagram: "",
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
	};
	// GET FOR ID RESTAURANT
	const init = async () => {
		try {
			const respRestaurantId = await getRestaurantiDUsuario(
				local?.id || local?.data?.id,
			);
			const dataRestauranteId = await respRestaurantId.json();
			console.log(dataRestauranteId);

			const dataPlates = await getPlatesByRestaurantById(
				dataRestauranteId.response[0].id,
			);

			const {
				id,
				name,
				description,
				specialty,
				image,
				department,
				city,
				tel,
				instagram,
				facebook,
			} = dataRestauranteId?.response[0];
			setRestaurant({
				id,
				name,
				description,
				specialty,
				image,
				department,
				city,
				tel,
				instagram,
				facebook,
			});
			// setFormValues({
			// 	id: restaurant.id,
			// 	name: restaurant.name,
			// 	description: restaurant.description,
			// 	specialty: restaurant.description,
			// 	image: restaurant.image,
			// });
		} catch (error) {
			throw error;
		}
	};

	const getPlatesByRestaurantById = async (id: string) => {
		try {
			console.log("Id", id);
			const respGetPlates = await (await getPlatesId(id)).json();
			console.log("get plates", respGetPlates);
			setplatesByID(respGetPlates.data);
		} catch (error) {
			throw error;
		}
	};

	useEffect(() => {
		asyncFunctionInit();
	}, []);

	const asyncFunctionInit = async () => {
		await setActions(true);
		await init();
	};

	// useEffect(() => {
	// 	setFormValues({
	// 		id: restaurant?.id,
	// 		name: restaurant?.name,
	// 		description: restaurant?.description,
	// 		specialty: restaurant?.description,
	// 		image: restaurant?.image,
	// 	});
	// }, [restaurant]);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setActionRestaurant({
			...actionRestaurant,
			actions: "",
		});
		if (actionRestaurant.actions == "ADD") {
			const local = JSON.parse(localStorage.getItem("@user") as any);

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
					local?.token || local?.data?.token,
				);
				const resp = await addResta.json();

				if (resp.ok) {
					setActionRestaurant({
						...actionRestaurant,
						actions: "ADD",
					});
					MySwal.fire({
						position: "top-end",
						icon: "success",
						title: "Restaurante creado",
						showConfirmButton: false,
						timer: 1500,
					});
					navigate("/restaurante");
				} else {
					setActionRestaurant({
						...actionRestaurant,
						actions: "ADD",
					});
					MySwal.fire({
						icon: "error",
						title: "Error",
						text: resp.msg,
					});
					// navigate('/restaurante');
				}
			} catch (error) {
				throw error;
			}
		} else if (actionRestaurant.actions == "EDIT") {
			// EDITAR RESTAURANTE

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
					local?.id || local?.data?.id,
				);
				const dataModifyResta = await respModifyResta.json();
				if (dataModifyResta.ok) {
					setActionRestaurant({
						...actionRestaurant,
						actions: "EDIT",
					});
					MySwal.fire({
						position: "top-end",
						icon: "success",
						title: dataModifyResta.msg,
						showConfirmButton: false,
						timer: 1500,
					});
					// navigate('/restaurante');
				} else {
					setActionRestaurant({
						...actionRestaurant,
						actions: "EDIT",
					});
					MySwal.fire({
						icon: "error",
						title: "Error",
						text: dataModifyResta.msg,
					});
					// navigate('/restaurante');
				}
			} catch (error) {
				throw error;
			}
		}
	};

	return (
		<div className="createrestaurant">
			<div className="pt-4">
        <div className="container-mobile">
          <div className="w-50 d-flex align-items-center flex-column">
            <div>
              <div className="container-preview-restaurant">
                <div className="picture-container">
                  <div className="picture">
                    <img
                      src={restaurant?.image ? restaurant.image : ""}
                      className="img-of-restaurant"
                      id="wizardPicturePreview"
                      title=""
                    />
                    <input type="file" id="wizard-picture" className="" />
                  </div>
                  <div className="bg-light">
                    <h6 className="text-17a2b8 font-weight-bold">
                      Elija una imagen
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="data-restaurant">
                <div className="department">
                  <i className="fa-solid fa-city  mx-2"></i>
                  <span className="text-capitalize">
                    {restaurant?.department}
                  </span>
                </div>
                <div className="city">
                  <i className="fa-sharp fa-solid fa-location-dot mx-2"></i>
                  <span className="text-capitalize">{restaurant?.city}</span>
                </div>
                <div className="tel">
                  <i className="fa-solid fa-phone mx-2"></i>
                  <span className="text-capitalize">{restaurant?.tel}</span>
                </div>
                <div className="facebook-restaurant">
                  <i className="fa-brands fa-facebook mx-2"></i>
                  <span className="text-capitalize">{restaurant?.facebook}</span>
                </div>
                <div className="instagram-restaurant">
                  <i className="fa-brands fa-square-instagram mx-2"></i>
                  <span className="text-capitalize">{restaurant?.instagram}</span>
                </div>
              </div>
            </div>
          </div>

          {/* INIT CONTAINER FORM */}
          <div className="form-container">
            <div className="container-new-restaurant">
              <div className="form-group w-75">
                <div className="d-flex justify-content-center p-2">
                  <h3>Mi restaurante</h3>
                </div>

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
                  value={formValues.name || restaurant.name}
                />
              </div>
              <div className="form-group w-75">
                <input
                  placeholder="Especialidad"
                  type="text"
                  className="form-control"
                  name="specialty"
                  onChange={handleChange}
                  value={formValues.specialty || restaurant.specialty}
                />
              </div>
              <div className="form-group w-75">
                <textarea
                  className="form-control resize"
                  rows={10}
                  placeholder="Descripcion del restaurante"
                  name="description"
                  onChange={handleChange}
                  value={formValues.description || restaurant.description}
                ></textarea>
              </div>
              <div className="d-flex  w-75">
                {actions === true ? (
                  <button
                    type="submit"
                    itemType="button"
                    data-toggle="modal"
                    data-target="#staticBackdropInfo"
                    className="btn m-1 btn-primary w-100"
                    onClick={() => setActionRestaurant({ actions: "EDIT" })}
                  >
                    Editar mas informacion
                  </button>
                ) : (
                  <p
                    itemType="button"
                    data-toggle="modal"
                    data-target="#staticBackdropInfo"
                    className="btn m-1 btn-primary w-100"
                    onClick={() => setActionRestaurant({ actions: "ADD" })}
                  >
                    Mas informacion
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="w-100">
            <div className="w-100 mt-2 d-flex justify-content-center">
              <div className="row gap">
                <div className="buttonPlates col-md">
                  <div className="plate-logo"></div>
                  <button
                    className="btn btn-success mt-2"
                    itemType="button"
                    data-toggle="modal"
                    data-target="#staticBackdrop2001"
                    onClick={() => setActionsPlate({ actions: "ADD" })}
                  >
                    Añadir plato
                  </button>
                </div>
                {platesByID.map((plate: PlateIdRestaurant) => (
                  <div className="buttonPlates col-md">
                    <div className="plate-logo">
                      <img src={plate.image} alt="" />
                    </div>
                    <button
                      className="btn btn-primary mt-2"
                      itemType="button"
                      data-toggle="modal"
                      data-target="#staticBackdrop2001"
                      onClick={() => setActionsPlate({ actions: "ADD" })}
                    >
                      Editar plato
                    </button>
                  </div>
                ))}
                {/* EDIT PLATE */}
              </div>
            </div>
          </div>

          <div>
            <AddAndCreatePlates actionsPlate={actionsPlate} />
            {/* END PLATE */}
            <div
              className="modal fade"
              id="staticBackdropInfo"
              data-backdrop="static"
              data-keyboard="false"
              tabIndex={-1}
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
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
                      aria-label="Close"
                    >
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
                            value={formValues.department || restaurant.department}
                          />
                          <input
                            type="text"
                            name="city"
                            className="form-control"
                            placeholder="Ciudad"
                            onChange={handleChange}
                            value={formValues.city || restaurant.city}
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
                            value={formValues.tel || restaurant.tel}
                          />
                        </div>
                        <div className="form-group d-flex">
                          <input
                            type="text"
                            name="facebook"
                            className="form-control"
                            placeholder="Link Facebook"
                            onChange={handleChange}
                            value={formValues.facebook || restaurant.facebook}
                          />
                          <input
                            type="tel"
                            name="instagram"
                            className="form-control"
                            placeholder="Link Instagram"
                            onChange={handleChange}
                            value={formValues.instagram || restaurant.instagram}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={handleSubmit}
                    >
                      {actionRestaurant.actions == "EDIT"
                        ? "Editar restaurante"
                        : actionRestaurant.actions == "ADD"
                        ? "Crear restaurante"
                        : ""}
                      {actionRestaurant.actions === "" && <LoaderAuth />}
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
			</div>
		</div>
	);
};

export default CreateRestaurant;
