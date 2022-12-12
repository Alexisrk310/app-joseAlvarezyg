import React from 'react';

import './styles/NoFound.css';
export interface NoFoundInterface {}

const NoFound: React.FC<NoFoundInterface> = () => {
	return <div className="nofound">NoFound</div>;
};

export default NoFound;
