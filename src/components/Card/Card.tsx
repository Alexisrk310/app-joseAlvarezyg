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
	idData?: string;
	eventeModal?: MouseEventHandler<HTMLDivElement>;
	specializedState?: boolean;
	classNick?: string;
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
	classNick,
}) => {
	return (
		<div
			onClick={evente}
			itemType="button"
			data-toggle="modal"
			data-target={'#staticBackdrop' + idData}
			className={classNick + ' card m-3 backgroud-img'}
			style={{
				width: '189px',
				height: '300px',
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
			<div>
				<img
					src={img}
					className="card-img-top"
					width={10}
					height={130}
					alt={img}
					onClick={eventeModal}
				/>
			</div>
			<div className="card-body">
				<h5 className="card-title white">{title}</h5>
				<div
					className="mt-3"
					style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
					<p className="card-text card-description white">{description}</p>
					<small className="white card-specialized">
						{specializedState ? <>Especialidad:</> : undefined} {specialized}
					</small>
					<small className="white d-block">{zone}</small>
					{stateStart ? (
						<Rating
							size="small"
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
		</div>
	);
};

export default Card;
