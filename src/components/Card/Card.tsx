import React, { MouseEventHandler, useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Card as CardProduct } from "flowbite-react";
import "./styles/Card.css";
import NoImage from "./img/sinimagen.jpg";

export interface CardInterface {
  img?: string;
  title?: string;
  description?: string;
  specialized?: string;
  zone?: string;
  evente?: MouseEventHandler<HTMLDivElement>;
  stateStart?: boolean;
  valueRating?: number | null | any;
  setValueRating?: number | null | any;
  actions?: boolean;
  handleEditPlate?: MouseEventHandler<HTMLDivElement>;
  handleDeletePlate?: MouseEventHandler<HTMLDivElement>;
  idRating?: MouseEventHandler<HTMLDivElement>;
  disableRating?: boolean;
  onChangee?: boolean;
  idData?: string;
  eventeModal?: MouseEventHandler<HTMLDivElement>;
  specializedState?: boolean;
  classNameNick?: string;
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
  specializedState = false,
  classNameNick,
}) => {
  useEffect(() => {
    console.log("Img", img, actions);
  }, []);

  return (
    <div onClick={evente}
    	itemType="button"
    	data-toggle="modal"
    	data-target={'#staticBackdrop' + idData} 
      className="flex items-start justify-center  via-[#F9F5F3] to-[#F9F5F3] bg-gradient-to-br card-new cursor-pointer">
      <div className="w-64 mx-auto imageCustom rounded-3xl shadow-xl overflow-hidden">
        <div className="mx-auto py-3">
          <div className="rounded-lg w-full">
            <div
              className="h-[206px] flex justify-center"
              // style={{
              //   backgroundImage: `url("${img ? img : NoImage}")`,
              //   backgroundSize: "70%",
              //   backgroundPosition: "center",
              //   backgroundColor: 'white',
              //   backgroundRepeat: 'no-repeat',
              //   borderRadius: '20%'
              // }}
            >
              <img className="h-[180px] w-[80%] rounded-[16px]" src={img ? img : NoImage} alt="" />
            </div>
          </div>
          <div className="p-4 sm:p-6">
            <p className="font-bold text-black text-[15px] leading-7 italic mb-1 uppercase font-[Inter]">
              {title}
            </p>
            <p className="text-black font-[10px] font-[Inter] italic mt-2 overflow-hidden h-20">
              {description}
            </p>
            <small className="text-black card-specialized lowercase">
     				  {specializedState ? <>Especialidad:</> : undefined} {specialized}
     			  </small>
            <div className="mt-2">
              {stateStart ? (
                <Rating
                  size="small"
                  onClick={idRating}
                  name="customized-10"                  
                  value={valueRating}
                  onChange={(event, newValue) => {
                    {
                      onChangee && setValueRating(newValue);
                    }
                  }}
                  disabled={disableRating}
                />
              ) : undefined}
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div
    // 	onClick={evente}
    // 	itemType="button"
    // 	data-toggle="modal"
    // 	data-target={'#staticBackdrop' + idData}
    // 	className={classNameNick + ' card m-3 backgroud-img'}
    // 	style={{
    // 		width: '189px',
    // 		height: '300px',
    // 	}}>
    // 	{actions ? (
    // 		<div className="card-header text-right">
    // 			<i
    // 				className="fa-solid fa-pen-to-square pointer"
    // 				onClick={handleEditPlate}
    // 				itemType="button"
    // 				data-toggle="modal"
    // 				data-target="#staticBackdrop2001"></i>
    // 			<i
    // 				className="fa-solid fa-trash ml-2 pointer"
    // 				onClick={handleDeletePlate}></i>
    // 		</div>
    // 	) : undefined}
    // 	<div onClick={eventeModal}>
    // 		<img
    // 			src={img}
    // 			className="card-img-top"
    // 			width={10}
    // 			height={130}
    // 			alt={img}

    // 		/>
    // 	</div>
    // 	<div className="card-body">
    // 		<h5 className="card-title white">{title}</h5>
    // 		<div
    // 			className="mt-3"
    // 			style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
    // 			<p className="card-text card-description white">{description}</p>
    // 			<small className="white card-specialized">
    // 				{specializedState ? <>Especialidad:</> : undefined} {specialized}
    // 			</small>
    // 			<small className="white d-block">{zone}</small>
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
