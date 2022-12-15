import React from 'react';
import { useRouteError } from 'react-router-dom';
import './styles/NoFoundPage.css';
export interface NoFoundPageInterface {}

const NoFoundPage: React.FC<NoFoundPageInterface> = () => {
	const error: any = useRouteError();

	return (
		<div>
			<h1>404</h1>
			<p>Page not found</p>
			<p>{error.statusText || error.message}</p>
		</div>
	);
};

export default NoFoundPage;
