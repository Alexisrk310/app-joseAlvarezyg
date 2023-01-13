import React from 'react';
import './styles/Loader.css';
export interface LoaderInterface {}

const Loader: React.FC<LoaderInterface> = () => {
	return (
		<div className="content-loader p-5">
			<span className="loader"></span>
		</div>
	);
};

export default Loader;
