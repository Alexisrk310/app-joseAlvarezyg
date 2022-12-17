import React from 'react';
import './styles/Card.css';
export interface CardInterface {
	img: string;
	title: string;
	description: string;
	specialized: string;
	zone: string;
}

const Card: React.FC<CardInterface> = ({
	img,
	title,
	description,
	specialized,
	zone,
}) => {
	return (
		<div
			className="card m-3 backgroud-img "
			style={{
				width: 250,
			}}>
			<img src={img} className="card-img-top" width={10} alt={img} />
			<div className="card-body ">
				<h5 className="card-title black">{title}</h5>
				<p className="card-text black">{description}</p>
				<small className="black">Especializad: {specialized}</small>
				<small className="black d-block">{zone}</small>
			</div>
		</div>
	);
};

export default Card;
