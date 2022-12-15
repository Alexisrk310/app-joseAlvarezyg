import React from 'react';
interface Props {
	img: string;
	title: string;
	description: string;
	specialized: string;
	zone: string;
}

export const Card = ({ img, title, description, specialized, zone }: Props) => {
	return (
		<div
			className="card m-3"
			style={{
				width: 300,
			}}>
			<img src={img} className="card-img-top" alt={img} />
			<div className="card-body">
				<h5 className="card-title black">{title}</h5>
				<p className="card-text black">{description}</p>
				<small className="black">Especializad: {specialized}</small>
				<small className="black d-block">{zone}</small>
			</div>
		</div>
	);
};
