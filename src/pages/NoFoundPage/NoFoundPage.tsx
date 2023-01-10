import React from 'react';
import { useRouteError } from 'react-router-dom';
import './styles/NoFoundPage.css';
export interface NoFoundPageInterface {}

const NoFoundPage: React.FC<NoFoundPageInterface> = () => {
	const error: any = useRouteError();

	return (
		<div className="nofoundpage">
			<h1 className="white mt-5">Error: 404</h1>
			<p className="white">Pagina no encontrada</p>
			<small className="white">Regresa a la pagina anterior</small>
			{/* <p>{error.statusText || error.message}</p> */}
		</div>
	);
};

export default NoFoundPage;
