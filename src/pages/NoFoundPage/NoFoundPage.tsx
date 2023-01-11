import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import './styles/NoFoundPage.css';
export interface NoFoundPageInterface {}

const NoFoundPage: React.FC<NoFoundPageInterface> = () => {
	// const error: any = useRouteError();

	return (
		<div className="nofoundpage">
			<h1 className="white mt-5">Error: 404</h1>
			<p className="white">Pagina no encontrada</p>
			<small className="white">Regresa a la pagina anterior</small>
			{/* <p>{error.statusText || error.message}</p> */}
			<Link to={'/'} className="btn btn-info mt-2">
				Ir a HOME
			</Link>
		</div>
	);
};

export default NoFoundPage;
