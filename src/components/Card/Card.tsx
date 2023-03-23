import React, { MouseEventHandler, useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Card as CardProduct } from "flowbite-react";
import "./styles/Card.css";
import { StarRating } from "../";
import NoImage from "./img/sinimagen.jpg";
import StarIcon from "@mui/icons-material/Star";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import Img from "react-cool-img";

export interface CardInterface {
  img?: string;
  title?: string;
  description?: string;
  specialized?: string;
  zone?: string;
  evente?: any;
  stateStart?: boolean;
  valueRating?: number | null | any;
  setValueRating?: number | null | any;
  actions?: boolean;
  handleEditPlate?: any;
  handleDeletePlate?: any;
  idRating?: any;
  disableRating?: boolean;
  onChangee?: boolean;
  idData?: string;
  eventeModal?: any;
  isPlate: boolean;
  specializedState?: boolean;
  classNameNameNameNick?: string;
}

const Card: React.FC<CardInterface> = ({
  img,
  title,
  description,
  specialized,
  zone,
  evente,
  stateStart,
  valueRating,
  setValueRating,
  actions,
  handleEditPlate,
  handleDeletePlate,
  idRating,
  disableRating,
  onChangee = true,
  idData,
  eventeModal,
  isPlate = false,
  specializedState = false,
  classNameNameNameNick,
}) => {

  const [DataModal, setDataModal] = useState({})

  useEffect(() => {
    console.log("Img", img, actions);
  }, []);

  return (
    <div
      itemType="button"
      data-toggle="modal"
      data-target={"#staticBackdrop" + idData}
      className="bg-gray-800 hover:bg-gray-900 transition ease-in rounded-md overflow-hidden shadow-lg max-w-md"
    >
      <div className="relative">
        <Img
          lazy={true}
          className="w-full h-56 object-cover object-center"
          src={img ? img : NoImage}
          alt="Restaurante"
        />
        <div className="absolute top-0 right-0 bg-white rounded-bl-md p-1">
          <i className="fas fa-star text-yellow-500 mr-1"></i>
          <span className="text-gray-800 font-bold text-sm">{valueRating}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <div className="flex items-center text-gray-400 text-sm mb-2">
          <i className="fas fa-utensils mr-2"></i>
          <span>Especialidad: {specialized}</span>
        </div>
        <div className="flex items-center text-yellow-500 mb-2">
          {stateStart ? (
            <Rating
              size="medium"
              onClick={idRating}
              name="simple-controlled"
              value={valueRating}
              icon={<StarIcon />}
              emptyIcon={<StarBorderOutlinedIcon className="text-white" />}
              onChange={(event, newValue) => {
                {
                  onChangee && setValueRating(newValue);
                }
              }}
              disabled={disableRating}
            />
          ) : undefined}
        </div>
        <div className="flex justify-between">
          {!isPlate ? (
            <button
              onClick={evente}
              className="bg-yellow-500 text-gray-800 rounded-full px-4 py-2 hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
            >
              Ver restaurante
            </button>
          ) : (
            <label onClick={eventeModal} className="bg-yellow-500 cursor-pointer text-gray-800 rounded-full px-4 py-2 hover:bg-yellow-600 focus:outline-none focus:shadow-outline" htmlFor="my-modal-6">Ver Platillo</label>
          )}
        </div>
      </div>
    </div>
    // <div onClick={evente}
    // 	itemType="button"
    // 	data-toggle="modal"
    // 	data-target={'#staticBackdrop' + idData}
    //   classNameNameName="flex items-start justify-center  via-[#F9F5F3] to-[#F9F5F3] bg-gradient-to-br card-new cursor-pointer">
    //   <div classNameNameName="w-64 mx-auto imageCustom rounded-3xl shadow-xl overflow-hidden">
    //     <div classNameNameName="mx-auto py-3">
    //       <div classNameNameName="rounded-lg w-full">
    //         <div
    //           classNameNameName="h-[206px] flex justify-center"
    //           // style={{
    //           //   backgroundImage: `url("${img ? img : NoImage}")`,
    //           //   backgroundSize: "70%",
    //           //   backgroundPosition: "center",
    //           //   backgroundColor: 'white',
    //           //   backgroundRepeat: 'no-repeat',
    //           //   borderRadius: '20%'
    //           // }}
    //         >
    //           <img classNameNameName="h-[180px] w-[80%] rounded-[16px]" src={img ? img : NoImage} alt="" />
    //         </div>
    //       </div>
    //       <div classNameNameName="p-4 sm:p-6">
    //         <p classNameNameName="font-bold text-black text-[15px] leading-7 italic mb-1 uppercase font-[Inter]">
    //           {title}
    //         </p>
    //         <p classNameNameName="text-black font-[10px] font-[Inter] italic mt-2 overflow-hidden h-20">
    //           {description}
    //         </p>
    //         <small classNameNameName="text-black card-specialized lowercase">
    //  				  {specializedState ? <>Especialidad:</> : undefined} {specialized}
    //  			  </small>
    //         <div classNameNameName="mt-2">
    //           {stateStart ? (
    //             <Rating
    //               size="small"
    //               onClick={idRating}
    //               name="customized-10"
    //               value={valueRating}
    //               onChange={(event, newValue) => {
    //                 {
    //                   onChangee && setValueRating(newValue);
    //                 }
    //               }}
    //               disabled={disableRating}
    //             />
    //           ) : undefined}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div
    // 	onClick={evente}
    // 	itemType="button"
    // 	data-toggle="modal"
    // 	data-target={'#staticBackdrop' + idData}
    // 	classNameNameName={classNameNameNameNick + ' card m-3 backgroud-img'}
    // 	style={{
    // 		width: '189px',
    // 		height: '300px',
    // 	}}>
    // 	{actions ? (
    // 		<div classNameNameName="card-header text-right">
    // 			<i
    // 				classNameNameName="fa-solid fa-pen-to-square pointer"
    // 				onClick={handleEditPlate}
    // 				itemType="button"
    // 				data-toggle="modal"
    // 				data-target="#staticBackdrop2001"></i>    // 			{stateStart ? (
    // 				<Rating
    // 					size="small"
    // 					onClick={idRating}
    // 					name="simple-controlled"
    // 					value={valueRating}
    // 					onChange={(event, newValue) => {
    // 						{
    // 							onChangee && setValueRating(newValue);
    // 						}
    // 					}}
    // 					disabled={disableRating}
    // 				/>
    // 			) : undefined}
    // 			<i
    // 				classNameNameName="fa-solid fa-trash ml-2 pointer"
    // 				onClick={handleDeletePlate}></i>
    // 		</div>
    // 	) : undefined}
    // 	<div onClick={eventeModal}>
    // 		<img
    // 			src={img}
    // 			classNameNameName="card-img-top"
    // 			width={10}
    // 			height={130}
    // 			alt={img}

    // 		/>
    // 	</div>
    // 	<div classNameNameName="card-body">
    // 		<h5 classNameNameName="card-title white">{title}</h5>
    // 		<div
    // 			classNameNameName="mt-3"
    // 			style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
    // 			<p classNameNameName="card-text card-description white">{description}</p>
    // 			<small classNameNameName="white card-specialized">
    // 				{specializedState ? <>Especialidad:</> : undefined} {specialized}
    // 			</small>
    // 			<small classNameNameName="white d-block">{zone}</small>
    // 			{stateStart ? (
    // 				<Rating
    // 					size="small"
    // 					onClick={idRating}
    // 					name="simple-controlled"
    // 					value={valueRating}
    // 					onChange={(event, newValue) => {
    // 						{
    // 							onChangee && setValueRating(newValue);
    // 						}
    // 					}}
    // 					disabled={disableRating}
    // 				/>
    // 			) : undefined}
    // 		</div>
    // 	</div>
    // </div>
  );
};

export default Card;
