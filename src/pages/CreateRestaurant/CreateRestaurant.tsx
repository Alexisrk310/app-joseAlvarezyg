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
import { ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import Img from "react-cool-img";

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

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Campo requerido"),
  description: Yup.string().required("Campo requerido"),
  specialty: Yup.string().required("Campo requerido"),
  department: Yup.string().required("Campo requerido"),
  tel: Yup.number().required("Campo requerido"),
  city: Yup.string().required("Campo requerido"),
  instagram: Yup.string().required("Campo requerido"),
  facebook: Yup.string().required("Campo requerido"),
  image: Yup.string(),
});

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
  const [idPlate, setidPlate] = useState("");
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

  const getPlatesByRestaurantById = async (id: string) => {
    try {
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
    // GET FOR ID RESTAURANT
    const init = async () => {
      try {
        const respRestaurantId = await getRestaurantiDUsuario(
          local?.id || local?.data?.id
        );
        const dataRestauranteId = await respRestaurantId.json();
        console.log(dataRestauranteId);

        if (!dataRestauranteId?.response[0]?.id) {
          setActions(false);
        } else {
          const dataPlates = await getPlatesByRestaurantById(
            dataRestauranteId.response[0].id
          );
          setActions(true);
        }

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

        formik.values.name = name;
        formik.values.id = id;
        formik.values.description = description;
        formik.values.specialty = specialty;
        // formik.values.image = image
        formik.values.department = department;
        formik.values.city = city;
        formik.values.tel = tel;
        formik.values.instagram = instagram;
        formik.values.facebook = facebook;
        setImage(image);
        setActionRestaurant({
          actions: "EDIT",
        });
        // setImage(image)
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
    console.log("actgion", actions);

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
          local?.token || local?.data?.token
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
        name: formValues.name.length > 0 ? formValues.name : restaurant.name,
        specialty:
          formValues.specialty.length > 0
            ? formValues.specialty
            : restaurant.specialty,
        description:
          formValues.description.length > 0
            ? formValues.description
            : restaurant.description,
        department:
          formValues.department.length > 0
            ? formValues.department
            : restaurant.department,
        city: formValues.city.length > 0 ? formValues.city : restaurant.city,
        // address: formValues.address,
        tel: formValues.tel.length > 0 ? formValues.tel : restaurant.tel,
        facebook:
          formValues.facebook.length > 0
            ? formValues.facebook
            : restaurant.facebook,
        instagram:
          formValues.instagram.length > 0
            ? formValues.instagram
            : restaurant.instagram,
      };

      try {
        const respModifyResta = await putRestaurant(
          ValueRestaurantEdit,
          local?.token || local?.data?.token,
          local?.id || local?.data?.id
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

  const [image, setImage] = useState("");

  const handleImageChange = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e  :any) => {
        console.log(e.target.result);
        setImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const formik = useFormik({
    initialValues: {
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
    },
    validationSchema: validationSchema,
    validateOnChange: true,
    validateOnMount: false,
    onSubmit: async (values) => {
      console.log("Tel", values);

      values.image = image;
      if (actionRestaurant.actions == "ADD") {
        const local = JSON.parse(localStorage.getItem("@user") as any);

        const ValueRestaurant = {
          image: image,
          name: values.name,
          specialty: values.specialty,
          description: values.description,
          department: values.department,
          city: values.city,
          // address: formValues.address,
          tel: parseInt(values.tel),
          facebook: values.facebook,
          instagram: values.instagram,
        };

        try {
          const addResta = await addRestaurant(
            ValueRestaurant,
            local?.token || local?.data?.token
          );
          const resp = await addResta.json();

          if (resp.ok) {
            MySwal.fire({
              position: "top-end",
              icon: "success",
              title: "Restaurante creado correctamente!",
              showConfirmButton: false,
              timer: 1500,
            });

            navigate("/restaurante/crear");
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

        try {
          const respModifyResta = await putRestaurant(
            values,
            local?.token || local?.data?.token,
            local?.id || local?.data?.id
          );
          const dataModifyResta = await respModifyResta.json();
          if (dataModifyResta.ok) {
            MySwal.fire({
              position: "top-end",
              icon: "success",
              title: "Se actualizo correctamente el restaurante",
              showConfirmButton: false,
              timer: 1500,
            });

            navigate("/restaurante/crear");
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

      console.log(values, image);
    },
  });

  return (
    <div className="w-screen h-auto bg-white flex flex-col  lg:flex-row  p-10">
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6 justify-center">
          <div className="flex flex-col items-center mb-2">
            {image && (
              <img src={image} alt="restaurant image" className="w-32 h-32" />
            )}
            <label htmlFor="image" className="mt-4 mb-2">
              Choose an image
            </label>
            <input
              id="image"
              name="image"
              type="file"
              // value={formik.values.image}
              accept="image/*"
              onChange={handleImageChange}
              className="border border-gray-400 p-2 rounded-lg"
            />
            {formik.touched.image && formik.errors.image ? (
              <div className="text-red-500">{formik.errors.name}</div>
            ) : null}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6 gap-y-2">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Nombre del restaurante {formik.touched.name}
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              placeholder="Ej: Jose alvarez food"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Especialidad
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="specialty"
              onChange={formik.handleChange}
              value={formik.values.specialty}
              placeholder="Ej: Comida Rapida"
            />
            {formik.touched.specialty && formik.errors.specialty ? (
              <div className="text-red-500">{formik.errors.specialty}</div>
            ) : null}
          </div>

          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Descripcion:
            </label>
            <textarea
              name="description"
              onChange={formik.handleChange}
              value={formik.values.description}
              placeholder="Ej: Comida Rapida"
              className="block uppercase w-full h-28 tracking-wide text-gray-700 text-xs font-bold mb-2"
            ></textarea>
            {formik.touched.description && formik.errors.description ? (
              <div className="text-red-500">{formik.errors.description}</div>
            ) : null}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Facebook
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="facebook"
              onChange={formik.handleChange}
              value={formik.values.facebook}
              placeholder="https://www.facebook.com/tupagina"
            />
            {formik.touched.facebook && formik.errors.facebook ? (
              <div className="text-red-500">{formik.errors.facebook}</div>
            ) : null}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Instagram
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="instagram"
              onChange={formik.handleChange}
              value={formik.values.instagram}
              placeholder="https://www.instagram.com/tupagina"
            />
            {formik.touched.instagram && formik.errors.instagram ? (
              <div className="text-red-500">{formik.errors.instagram}</div>
            ) : null}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Ciudad
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="city"
              onChange={formik.handleChange}
              value={formik.values.city}
              placeholder="Ej: Cartagena"
            />
            {formik.touched.city && formik.errors.city ? (
              <div className="text-red-500">{formik.errors.city}</div>
            ) : null}
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Departamento
            </label>
            <div className="relative">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                name="department"
                onChange={formik.handleChange}
                value={formik.values.department}
                placeholder="Ej: Bolivar"
              />
              {formik.touched.department && formik.errors.department ? (
                <div className="text-red-500">{formik.errors.department}</div>
              ) : null}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Telefono o Celular
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="tel"
              onChange={formik.handleChange}
              value={formik.values.tel}
              placeholder="Ej: 3046792771"
            />
            {formik.touched.tel && formik.errors.tel ? (
              <div className="text-red-500">{formik.errors.tel}</div>
            ) : null}
          </div>
        </div>
        <div
          onClick={() => {
            formik.handleSubmit();
          }}
          className="btn w-full bg-[#33D1CB] text-white  hover:bg-[#23B2AC]"
        >
          {actionRestaurant.actions === "ADD"
            ? "Crear Restaurante"
            : "Editar Restaurante"}
        </div>
      </form>

      <div className="flex justify-center w-full p-10">
          <AddAndCreatePlates platesByID={platesByID} actionsPlate={actionsPlate} idPlate={idPlate}/>
      </div>
    </div>
    // <div classNameName="createrestaurant">
    // 	<div classNameName="pt-4">
    // 		<div classNameName="container-mobile">
    // 			<div classNameName="w-50 d-flex align-items-center flex-column">
    // 				<div>
    // 					<div classNameName="container-preview-restaurant">
    // 						<div classNameName="picture-container">
    // 							<div classNameName="picture">
    // 								<img
    // 									src={
    // 										restaurant?.image
    // 											? restaurant.image
    // 											: profileImg.imgPlate
    // 											? profileImg.imgPlate
    // 											: ''
    // 									}
    // 									classNameName="img-of-restaurant"
    // 									id="wizardPicturePreview"
    // 									title=""
    // 								/>

    // 								<input
    // 									type="file"
    // 									onChange={imageHandler}
    // 									name="image-upload"
    // 									accept=".png, .jpg, .jpeg"
    // 									id="wizard-picture"
    // 									classNameName=""
    // 								/>
    // 							</div>
    // 							<div classNameName="bg-light">
    // 								<h6 classNameName="text-17a2b8 font-weight-bold">
    // 									Elija una imagen
    // 								</h6>
    // 							</div>
    // 						</div>
    // 					</div>
    // 				</div>

    // 				<div>
    // 					<div classNameName="data-restaurant">
    // 						<div classNameName="department">
    // 							<i classNameName="fa-solid fa-city  mx-2"></i>
    // 							<span classNameName="text-capitalize">
    // 								{restaurant?.department}
    // 							</span>
    // 						</div>
    // 						<div classNameName="city">
    // 							<i classNameName="fa-sharp fa-solid fa-location-dot mx-2"></i>
    // 							<span classNameName="text-capitalize">{restaurant?.city}</span>
    // 						</div>
    // 						<div classNameName="tel">
    // 							<i classNameName="fa-solid fa-phone mx-2"></i>
    // 							<span classNameName="text-capitalize">{restaurant?.tel}</span>
    // 						</div>
    // 						<div classNameName="facebook-restaurant">
    // 							<i classNameName="fa-brands fa-facebook mx-2"></i>
    // 							<span classNameName="text-capitalize">
    // 								{restaurant?.facebook}
    // 							</span>
    // 						</div>
    // 						<div classNameName="instagram-restaurant">
    // 							<i classNameName="fa-brands fa-square-instagram mx-2"></i>
    // 							<span classNameName="text-capitalize">
    // 								{restaurant?.instagram}
    // 							</span>
    // 						</div>
    // 					</div>
    // 				</div>
    // 			</div>

    // 			{/* INIT CONTAINER FORM */}
    // 			<div classNameName="form-container">
    // 				<div classNameName="container-new-restaurant">
    // 					<div classNameName="form-group w-75">
    // 						<div classNameName="d-flex justify-content-center p-2">
    // 							<h3>Mi restaurante</h3>
    // 						</div>

    // 						<input
    // 							placeholder="Nombre"
    // 							type="text"
    // 							classNameName="form-control"
    // 							// name="name"
    // 							onChange={handleChange}
    // 							value={local?.data?.payload?.name || local?.name}
    // 							readOnly
    // 						/>
    // 					</div>
    // 					<div classNameName="form-group w-75">
    // 						<input
    // 							placeholder="Nombre del restaurante"
    // 							type="text"
    // 							classNameName="form-control"
    // 							name="name"
    // 							onChange={handleChange}
    // 							value={formValues?.name || restaurant?.name}
    // 						/>
    // 					</div>
    // 					<div classNameName="form-group w-75">
    // 						<input
    // 							placeholder="Especialidad"
    // 							type="text"
    // 							classNameName="form-control"
    // 							name="specialty"
    // 							onChange={handleChange}
    // 							value={formValues?.specialty || restaurant?.specialty}
    // 						/>
    // 					</div>
    // 					<div classNameName="form-group w-75">
    // 						<textarea
    // 							classNameName="form-control resize"
    // 							rows={10}
    // 							placeholder="Descripcion del restaurante"
    // 							name="description"
    // 							onChange={handleChange}
    // 							value={
    // 								formValues?.description || restaurant?.description
    // 							}></textarea>
    // 					</div>
    // 					<div classNameName="d-flex  w-75">
    // 						{actions === true ? (
    // 							<button
    // 								type="submit"
    // 								itemType="button"
    // 								data-toggle="modal"
    // 								data-target="#staticBackdropInfo"
    // 								classNameName="btn m-1 btn-primary w-100 text-[#007bff]"
    // 								onClick={() => setActionRestaurant({ actions: 'EDIT' })}>
    // 								Editar mas informacion
    // 							</button>
    // 						) : (
    // 							<p
    // 								itemType="button"
    // 								data-toggle="modal"
    // 								data-target="#staticBackdropInfo"
    // 								classNameName="btn m-1 btn-primary w-100 text-[#007bff]"
    // 								onClick={() => setActionRestaurant({ actions: 'ADD' })}>
    // 								Mas informacion
    // 							</p>
    // 						)}
    // 					</div>
    // 				</div>
    // 			</div>
    // 			<div classNameName="w-100">
    // 				<div classNameName="w-100 mt-2 d-flex container-mobile">
    // 					<div classNameName="row gap">
    // 						<div classNameName="buttonPlates col-md">
    // 							<div classNameName="plate-logo"></div>
    // 							<button
    // 								classNameName="btn btn-success mt-2 text-white"
    // 								itemType="button"
    // 								data-toggle="modal"
    // 								data-target="#staticBackdrop2001"
    // 								onClick={() => {
    // 									setidPlate('');
    // 									setActionsPlate({ actions: 'ADD' });
    // 								}}>
    // 								Añadir plato
    // 							</button>
    // 						</div>
    // 						{platesByID.map((plate: PlateIdRestaurant) => (
    // 							<div classNameName="buttonPlates col-md" key={plate.id}>
    // 								<div classNameName="plate-logo">
    // 									<img src={plate.image} alt="" />
    // 								</div>
    // 								<button
    // 									classNameName="btn btn-primary mt-2 text-white"
    // 									itemType="button"
    // 									data-toggle="modal"
    // 									data-target="#staticBackdrop2001"
    // 									onClick={() => {
    // 										setidPlate(plate?.id);
    // 										setActionsPlate({ actions: 'EDIT' });

    // 									}}>
    // 									Editar plato
    // 								</button>
    // 							</div>
    // 						))}
    // 						{/* EDIT PLATE */}
    // 					</div>
    // 				</div>
    // 			</div>

    // 			<div>
    // 				<AddAndCreatePlates actionsPlate={actionsPlate} idPlate={idPlate} />
    // 				{/* END PLATE */}
    // 				<div
    // 					classNameName="modal fade"
    // 					id="staticBackdropInfo"
    // 					data-backdrop="static"
    // 					data-keyboard="false"
    // 					tabIndex={-1}
    // 					aria-labelledby="staticBackdropLabel"
    // 					aria-hidden="true">
    // 					<div classNameName="modal-dialog">
    // 						<div classNameName="modal-content">
    // 							<div classNameName="modal-header">
    // 								<h5 classNameName="modal-title" id="staticBackdropLabel">
    // 									Información adicional
    // 								</h5>
    // 								<button
    // 									type="button"
    // 									classNameName="close"
    // 									data-dismiss="modal"
    // 									aria-label="Close">
    // 									<span aria-hidden="true">&times;</span>
    // 								</button>
    // 							</div>
    // 							<div classNameName="modal-body">
    // 								<div classNameName="d-flex container-team-modals">
    // 									<div classNameName="modalAddPlate">
    // 										<div classNameName="d-flex form-group">
    // 											<input
    // 												type="text"
    // 												name="department"
    // 												classNameName="form-control"
    // 												placeholder="Departmento"
    // 												onChange={handleChange}
    // 												value={
    // 													formValues.department || restaurant.department
    // 												}
    // 											/>
    // 											<input
    // 												type="text"
    // 												name="city"
    // 												classNameName="form-control"
    // 												placeholder="Ciudad"
    // 												onChange={handleChange}
    // 												value={formValues.city || restaurant.city}
    // 											/>
    // 										</div>
    // 										{/* <div classNameName="form-group w-75">
    //               <input
    //                 type="text"
    //                 name="address"
    //                 classNameName="form-control"
    //                 placeholder="Direccion"
    //                 onChange={handleChange}
    //                 value={formValues.address}
    //               />
    //             </div> */}
    // 										<div classNameName="form-group w-75">
    // 											<input
    // 												type="tel"
    // 												name="tel"
    // 												classNameName="form-control"
    // 												placeholder="Telefono"
    // 												onChange={handleChange}
    // 												value={formValues.tel || restaurant.tel}
    // 											/>
    // 										</div>
    // 										<div classNameName="form-group d-flex">
    // 											<input
    // 												type="text"
    // 												name="facebook"
    // 												classNameName="form-control"
    // 												placeholder="Link Facebook"
    // 												onChange={handleChange}
    // 												value={formValues.facebook || restaurant.facebook}
    // 											/>
    // 											<input
    // 												type="tel"
    // 												name="instagram"
    // 												classNameName="form-control"
    // 												placeholder="Link Instagram"
    // 												onChange={handleChange}
    // 												value={formValues.instagram || restaurant.instagram}
    // 											/>
    // 										</div>
    // 									</div>
    // 								</div>
    // 							</div>
    // 							<div classNameName="modal-footer">
    // 								<button
    // 									type="button"
    // 									classNameName="btn btn-success"
    // 									onClick={handleSubmit}>
    // 									{actionRestaurant.actions == 'EDIT'
    // 										? 'Editar restaurante'
    // 										: actionRestaurant.actions == 'ADD'
    // 										? 'Crear restaurante'
    // 										: ''}
    // 									{actionRestaurant.actions === '' && <LoaderAuth />}
    // 								</button>
    // 								<button
    // 									type="button"
    // 									classNameName="btn btn-secondary text-gray-700"
    // 									data-dismiss="modal">
    // 									Cerrar
    // 								</button>
    // 							</div>
    // 						</div>
    // 					</div>
    // 				</div>
    // 			</div>
    // 		</div>
    // 	</div>
    // </div>
  );
};

export default CreateRestaurant;
