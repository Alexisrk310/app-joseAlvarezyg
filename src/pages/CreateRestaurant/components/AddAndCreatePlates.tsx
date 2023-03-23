import { LoaderAuth } from "@/components";
import { useFormValues } from "@/hooks/useFormValues";
import { postPlates } from "@/utilities/api/plate/postPlates";
import { putPlatesId } from "@/utilities/api/plate/putPlates";
import React, { useEffect, useState } from "react";
import { getPlatesId, getPlatesUnique } from "@/utilities/api/plate/getPlates";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as Yup from "yup";
import NoImage from "../../../components/Card/img/sinimagen.jpg";

import "../styles/CreateRestaurant.css";
import { useFormik } from "formik";
import { Spinner, Toast } from "flowbite-react";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Campo requerido").min(6),
  description: Yup.string().required("Campo requerido"),
});

const AddAndCreatePlates = ({ actionsPlate, idPlate, platesByID, setplatesByID, restaurantId }: any) => {
  const [stateLoading, setstateLoading] = useState(false);
  const [updatePlates, setupdatePlates] = useState(false)
  const [handleChange, formValues, setFormValues] = useFormValues({
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    name: "",
    description: "",
  });
  const [image, setimage] = useState("");

  const local = JSON.parse(localStorage.getItem("@user") as any);
  const MySwal = withReactContent(Swal);
  // useEffect(() => {
  //   //   GET PLATES FOR ID - EDIT
  //   const init = async () => {
  //     const getPlatesByRestaurantById = async (id: string) => {
  //       try {
  //         const respGetPlates = await (await getPlatesId(id)).json();
  //         console.log("get plates", respGetPlates);
  //         setplatesByID(respGetPlates.data);
  //       } catch (error) {
  //         throw error;
  //       }
  //     };
  //   };
  //   if (updatePlates) init();
  // }, [updatePlates]);

  const handleSubmitCreateAndEdit = async (e: any) => {
    console.log(e);
    e.preventDefault();
    setstateLoading(true);
    if (actionsPlate.actions == "ADD") {
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
            position: "top-end",
            icon: "success",
            title: "Plato creado",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          setstateLoading(false);
          MySwal.fire({
            icon: "error",
            title: "Error",
            text: "No se pudo crear el plato",
          });
        }
      } catch (error) {
        console.log(error);
      }
    } else if (actionsPlate.actions == "EDIT") {
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
            position: "top-end",
            icon: "success",
            title: "Plato Editado",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          setstateLoading(false);
          MySwal.fire({
            icon: "error",
            title: "Error",
            text: "No se pudo editar el plato",
          });
        }
        console.log(respPutPlates);
        console.log(dataPutPlates);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleImageChange = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      const fileSize = e.target.files.item(0).size;
      const fileMb = fileSize / 1024 ** 2;
      if (fileMb >= 2) {
        return alert("Please select a file less than 2MB.");
      } else {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          console.log("target", e.target);
          console.log(e.target.result);
          setimage(e.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      description: "",
      image: "",
    },
    validationSchema: validationSchema,
    validateOnChange: true,
    validateOnMount: false,
    onSubmit: async (values) => {
      console.log("values", values);
      if (actionsPlate.actions == "ADD") {
        const ValuesPlate = {
          image: image,
          name: values.name,
          description: values.description,
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
              position: "top-end",
              icon: "success",
              title: "Plato creado",
              showConfirmButton: false,
              timer: 1500,
            });

            setupdatePlates(true)
            location.reload()
          } else {
            setupdatePlates(false)
            MySwal.fire({
              icon: "error",
              title: "Error",
              text: "No se pudo crear el plato",
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
  });

  return (
    <div className="grid grid-cols-1 m-0 md:grid-cols-2 gap-6 w-full">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full">
        <form className="mt-6">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Crear platillo
          </h2>
          <div className="flex flex-col items-center mb-2">
            {image && (
              <img src={image} alt="restaurant image" className="w-32 h-32" />
            )}
            <label htmlFor="image" className="mt-4 mb-2">
              [MAX FILE SIZE = 1.8MB]
            </label>
            <input
              id="image"
              name="image"
              type="file"
              // value={formik.values.image}
              accept="image/*"
              onChange={handleImageChange}
              className="border border-gray-400 p-2 rounded-lg w-full"
            />
            {formik.touched.image && formik.errors.image ? (
              <div className="text-red-500">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Nombre del platillo
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              onChange={formik.handleChange}
              placeholder="Ej. Hamburguesa"
              name="name"
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="description"
            >
              Descripción del platillo
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ej. Hamburguesa con queso, lechuga y tomate"
              name="description"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
            {formik.touched.description && formik.errors.description ? (
              <div className="text-red-500">{formik.errors.description}</div>
            ) : null}
          </div>
          {formik.isSubmitting ? (
            <Toast className="w-full max-w-none">
              <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-500 dark:bg-blue-800 dark:text-blue-200">
                <Spinner className="h-5 w-5" />
              </div>
              <div className="ml-3 text-sm font-normal">
                Estamos Creando Tu plato...
              </div>
              <Toast.Toggle />
            </Toast>
          ) : (
            <div
              onClick={() => {
                formik.handleSubmit();
              }}
              className="btn w-full bg-[#33D1CB] text-white  hover:bg-[#23B2AC]"
            >
              {actionsPlate.actions === "ADD"
                ? "Crear Platillo"
                : "Editar Platillo"}
            </div>
          )}
        </form>
      </div>
      <div className="bg-gray-100 w-full rounded-lg shadow-md p-6 ">
        <h2 className="text-xl font-semibold mb-4">
          Listado de platillos creados
        </h2>
        <ul className="space-y-4 overflow-y-auto h-[90%]">
          {platesByID.map((plate: any) => (
            <li className="cursor-pointer">
              <div className="flex items-center">
                <div className="h-16 w-16 bg-gray-300 rounded-full overflow-hidden">
                  <img
                    src={plate.image || NoImage}
                    alt={plate.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">{plate.name}</h3>
                  <p className="text-gray-500">{plate.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    // <>
    // 	<div
    // 		className="modal fade"
    // 		id="staticBackdrop2001"
    // 		data-backdrop="static"
    // 		data-keyboard="false"
    // 		tabIndex={-1}
    // 		aria-labelledby="staticBackdropLabel"
    // 		aria-hidden="true">
    // 		<div className="modal-dialog">
    // 			<div className="modal-content">
    // 				<div className="modal-header">
    // 					<h5 className="modal-title" id="staticBackdropLabel">
    // 						{actionsPlate.actions == 'EDIT'
    // 							? 'Editar plato'
    // 							: 'Agrega un plato'}
    // 					</h5>
    // 					<button
    // 						type="button"
    // 						className="close"
    // 						data-dismiss="modal"
    // 						aria-label="Close">
    // 						<span aria-hidden="true">&times;</span>
    // 					</button>
    // 				</div>
    // 				<div className="modal-body">
    // 					<div className="d-flex container-team-modals">
    // 						<div className="modalAddPlate">
    // 							<div className="m-3">
    // 								<div className="page-plate">
    // 									<div className="container-plate">
    // 										<div className="img-holder-plate">
    // 											<img
    // 												src={formValues.image}
    // 												alt=""
    // 												id="img"
    // 												className="img-plate"
    // 											/>
    // 											<input
    // 												type="file"
    // 												accept="image/*"
    // 												name="image-upload"
    // 												id="inputPlate"
    // 												// required
    // 												onChange={HandlePlate}
    // 											/>
    // 										</div>

    // 										{/* <div className="label">
    // 											<label className="image-upload-plate" htmlFor="input">
    // 												Elige la foto
    // 											</label>
    // 										</div> */}
    // 									</div>
    // 								</div>
    // 							</div>

    // 							<div className="form-group w-75">
    // 								<input
    // 									placeholder="Nombre del plato"
    // 									type="text"
    // 									className="form-control"
    // 									id="exampleInputPassword1"
    // 									name="namePlate"
    // 									onChange={handleChange}
    // 									value={formValues.namePlate}
    // 								/>
    // 							</div>
    // 							<div className="form-group w-75">
    // 								<textarea
    // 									className="form-control"
    // 									id="exampleFormControlTextarea1"
    // 									rows={10}
    // 									placeholder="Descripcion del plato"
    // 									name="descriptionPlate"
    // 									onChange={handleChange}
    // 									value={formValues.descriptionPlate}></textarea>
    // 							</div>
    // 						</div>
    // 					</div>
    // 				</div>
    // 				<div className="modal-footer">
    // 					<button
    // 						className="btn btn-success"
    // 						onClick={handleSubmitCreateAndEdit}>
    // 						{actionsPlate.actions === 'ADD'
    // 							? 'Crear plato '
    // 							: 'Editar plato '}
    // 						{!stateLoading ? '' : <LoaderAuth />}
    // 					</button>
    // 					<button
    // 						type="button"
    // 						className="btn btn-secondary text-gray-700"
    // 						data-dismiss="modal">
    // 						Cerrar
    // 					</button>
    // 				</div>
    // 			</div>
    // 		</div>
    // 	</div>
    // </>
  );
};

export default AddAndCreatePlates;
