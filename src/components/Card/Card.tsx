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
}

const Card: React.FC<CardInterface> = ({
	img,
	title,
	description,
	specialized,
	zone,
	evente,
	stateStart,
}) => {
	const [value, setValue] = useState<number | null>(2);
	return (
		<div
			onClick={evente}
			className="card m-3 backgroud-img"
			style={{
				width: 250,
			}}>
			<img src={img} className="card-img-top" width={10} alt={img} />
			<div className="card-body ">
				<h5 className="card-title black">{title}</h5>
				<p className="card-text black">{description}</p>
				<small className="black">{specialized}</small>
				<small className="black d-block">{zone}</small>
				{stateStart ? (
					<Rating
						name="simple-controlled"
						value={value}
						onChange={(event, newValue) => {
							setValue(newValue);
						}}
					/>
				) : undefined}
			</div>
		</div>
	);
};

export default Card;
