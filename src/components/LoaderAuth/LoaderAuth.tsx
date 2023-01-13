import React from 'react';
import './styles/LoaderAuth.css';
export interface LoaderAuthInterface {}

const LoaderAuth: React.FC<LoaderAuthInterface> = () => {
	return <span className="loaderAuth"></span>;
};

export default LoaderAuth;
