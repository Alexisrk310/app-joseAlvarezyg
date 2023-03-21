import React from 'react';
import './styles/Header.css';
import Signature from './img/firma.png'
export interface HeaderInterface {}

const Header: React.FC<HeaderInterface> = () => {
	return (
		<div className="header">
			<img className='w-40 h-12' src={Signature} alt="" />
		</div>
	);
};

export default Header;
