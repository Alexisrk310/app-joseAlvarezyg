import React, { MouseEventHandler, useState } from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import './styles/Card.css';
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
}) => {
	return (
		<div
			onClick={evente}
			className="card m-3 backgroud-img"
			style={{
				width: 250,
			}}>
			{actions ? (
				<div className="card-header text-right">
					<i
						className="fa-solid fa-pen-to-square pointer"
						onClick={handleEditPlate}
						itemType="button"
						data-toggle="modal"
						data-target="#staticBackdrop2001"></i>
					<i
						className="fa-solid fa-trash ml-2 pointer"
						onClick={handleDeletePlate}></i>
				</div>
			) : undefined}

			<img
				src={img}
				className="card-img-top"
				width={10}
				height={248}
				alt={img}
			/>
			<div className="card-body ">
				<h5 className="card-title black">{title}</h5>
				<p className="card-text black">{description}</p>
				<small className="black">{specialized}</small>
				<small className="black d-block">{zone}</small>
				{stateStart ? (
					<Rating
						onClick={idRating}
						name="simple-controlled"
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
	);
};

export default Card;
